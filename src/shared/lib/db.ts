import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { dbClient: PrismaClient };

export const dbClient =
    globalForPrisma.dbClient ||
    new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.dbClient = dbClient;
