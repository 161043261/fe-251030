import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb(
      {
        host: '127.0.0.1',
        port: 3333,
        user: 'user',
        password: 'pass',
        database: 'db0',
      } /** PoolConfig */,
    );
    super({ adapter });
  }
}
