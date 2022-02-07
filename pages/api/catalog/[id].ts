import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../components/client";

export default async function handle(req: any, res: any) {
  const { id } = req.query;

  const numId: number = parseInt(id);
  const catalogs = await prisma.catalog.findUnique({
    where: { id: numId },
    include: { contents: { orderBy: { startPage: "asc" } } },
  });
  res.json(catalogs);
}
