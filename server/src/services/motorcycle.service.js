import prisma from "../lib/prisma.js";

export async function getAllMotorcycles() {
  return await prisma.motorcycle.findMany({
    orderBy: {
      name: "asc",
    },
  });
}
