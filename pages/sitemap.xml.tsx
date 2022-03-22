import * as fs from "fs";
import { catalog } from "../components/publicInterface";
import { prisma } from "../components/client";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: any) => {
  const BASE_URL = "https://swmusic.co.kr";

  const staticPaths = [
    "https://swmusic.co.kr/about",
    "https://swmusic.co.kr/contact",
    "https://swmusic.co.kr/messe",
    "https://swmusic.co.kr/namm",
  ];

  // const staticPaths = fs
  //   .readdirSync("pages")
  //   .filter((staticPage) => {
  //     return ![
  //       "api",
  //       "_app.tsx",
  //       "_document.tsx",
  //       "index.tsx",
  //       "sitemap.xml.tsx",
  //       "sitemap",
  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     return `${BASE_URL}/${staticPagePath}`;
  //   });

  const catalogs: catalog[] = await prisma.catalog.findMany({
    include: { pages: { orderBy: { pageNumber: "asc" } } },
  });

  let dynamicPaths = [];

  for (let i = 0; i < catalogs.length; i++) {
    const forCatalog: catalog = catalogs[i];

    if (forCatalog.pages) {
      for (let j = 0; j < forCatalog.pages.length; j++) {
        dynamicPaths.push(
          `${BASE_URL}/catalog/${forCatalog.pages[
            j
          ].catalogId.toString()}/${forCatalog.pages[j].pageNumber.toString()}`
        );
      }
    }
  }

  const allPaths = [`${BASE_URL}/`, ...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
          .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
      </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
