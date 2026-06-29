import prisma from "../lib/prisma.js";

export async function getAllMotorcycles(query) {
  const { category, search, sort = "name", order = "asc" } = query;

  const where = {};

  if (category) {
    where.category = category;
  }

  if (search) {
    where.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  return prisma.motorcycle.findMany({
    where,
    orderBy: {
      [sort]: order,
    },
  });
}

export async function getMotorcycleBySlug(slug) {
  return await prisma.motorcycle.findUnique({
    where: {
      slug,
    },
  });
}

export async function getCategories() {
  const categories = await prisma.motorcycle.findMany({
    select: {
      category: true,
    },
    distinct: ["category"],
    orderBy: {
      category: "asc",
    },
  });

  return categories.map((item) => item.category);
}
