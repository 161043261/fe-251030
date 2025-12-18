import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { env } from 'prisma/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const config = {
      host: env('DATABASE_HOST'),
      port: Number.parseInt(env('DATABASE_PORT'), 10),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      database: env('DATABASE_NAME'),
    };
    console.log(config);
    const adapter = new PrismaMariaDb(config);
    super({ adapter });
  }
}
