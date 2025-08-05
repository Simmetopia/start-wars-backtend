import { PrismaClient } from "../prisma/prisma-client/client";

export const db = new PrismaClient();
