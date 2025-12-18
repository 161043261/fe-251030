# Server

```bash
DATABASE_URL="mysql://user:pass@localhost:3333/db0"
SHADOW_DATABASE_URL="mysql://user:pass@localhost:3333/db1"
DATABASE_HOST="127.0.0.1"
DATABASE_PORT=3333
DATABASE_USER="user"
DATABASE_PASSWORD="pass"
DATABASE_NAME="db0"
```

## Prisma

```bash
pnpm add prisma dotenv -D
pnpm add @prisma/client @prisma/adapter-mariadb

rm -rf ./prisma && pnpm exec prisma init
pnpm exec prisma migrate dev
pnpm exec prisma generate
```
