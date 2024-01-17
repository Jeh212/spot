import { PrismaClient } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime/library";

export const prisma = new PrismaClient<PrismaClientOptions>();

async function InitiateDatabase() {
  try {
    await prisma.$connect();
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
export { InitiateDatabase };
