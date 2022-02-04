import { PrismaClient } from "@prisma/client";
import { stringify } from "querystring";
const prisma = new PrismaClient();

interface page {
  ip: string;
  filePath: string;
  catalogId: number;
  tag: string;
  pageNumber: number;
}

async function main() {
  const dataList: page[] = [];

  for (let i = 1; i < 314; i++) {
    let pageData: page = {
      ip: "146.56.147.155",
      filePath: `/images/${i.toString()}.jpg`,
      catalogId: 1,
      tag: "",
      pageNumber: i,
    };
    dataList.push(pageData);
  }

  // for (let i = 1; i < 25; i++) {
  //   let pageData: page = {
  //     ip: "146.56.147.155",
  //     filePath: `/images/2022New/${i.toString()}.jpg`,
  //     catalogId: 2,
  //     tag: "",
  //     pageNumber: i,
  //   };
  //   dataList.push(pageData);
  // }

  await prisma.page.createMany({ data: dataList });

  // Do stuff
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
