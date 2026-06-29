import { PrismaClient } from "@prisma/client";
import motorcycles from "../data/motorcycles.json" with { type: "json" };

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  await prisma.motorcycle.deleteMany();

  await prisma.motorcycle.createMany({
    data: motorcycles,
    skipDuplicates: true,
  });

  console.log(`Inserted ${motorcycles.length} motorcycles.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
