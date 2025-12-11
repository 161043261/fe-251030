import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
    private readonly cryptoService: CryptoService,
  ) {}

  async login(loginAuthDto: LoginAuthDto) {
    const { username, password } = loginAuthDto;
    const res = await this.prismaService.user.findFirst({
      where: {
        username,
      },
    });

    if (!res) {
      throw new HttpException('username not found', HttpStatus.BAD_REQUEST);
    }

    if (username !== res.username) {
      throw new HttpException('username error', HttpStatus.BAD_REQUEST);
    }
    const hash = this.cryptoService.encrypt(password);
    if (hash !== res.password) {
      throw new HttpException('password error', HttpStatus.BAD_REQUEST);
    }
    const token = this.jwtService.sign({
      username: res.username,
      id: res.id,
    });
    return { token };
  }

  async register(createAuthDto: CreateAuthDto) {
    const { username, password } = createAuthDto;

    const res = await this.prismaService.user.findFirst({
      where: {
        username,
      },
    });

    if (res) {
      throw new HttpException(
        'username already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const ret = await this.prismaService.user.create({
        data: {
          username,
          password: this.cryptoService.encrypt(password),
        },
      });
      return ret;
    } catch (err) {
      throw new HttpException(
        'register failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: err,
        },
      );
    }
  }
}
