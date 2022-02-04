import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  const { id } = req.query;

  const numId: number = parseInt(id);
  const catalogs = await prisma.catalog.findUnique({
    where: { id: numId },
    include: { contents: true },
  });
  res.json(catalogs);
}
