# Server

```bash
DATABASE_URL="mysql://user:pass@localhost:3333/db0"
SHADOW_DATABASE_URL="mysql://user:pass@localhost:3333/db1"
```

## Prisma

```bash
pnpm add prisma dotenv -D
pnpm add @prisma/client @prisma/adapter-mariadb

pnpm exec prisma init
pnpm exec prisma migrate dev
pnpm exec prisma generate
```
