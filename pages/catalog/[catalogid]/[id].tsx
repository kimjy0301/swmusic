import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getPlaiceholder } from "plaiceholder";
import { ReactElement } from "react";
import { animated, Transition } from "react-spring";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import BaseLayout from "../../../components/BaseLayout";
import CatalogLayout from "../../../components/CatalogLayout";
import { prisma } from "../../../components/client";

import { catalog, page } from "../../../components/publicInterface";

export async function getStaticPaths() {
  const catalogs: catalog[] = await prisma.catalog.findMany({
    include: { pages: true },
  });

  let paths = [];

  for (let i = 0; i < catalogs.length; i++) {
    const forCatalog: catalog = catalogs[i];

    if (forCatalog.pages) {
      for (let j = 0; j < forCatalog.pages.length; j++) {
        let tmpPath = {
          params: {
            catalogid: forCatalog.pages[j].catalogId.toString(),
            id: forCatalog.pages[j].pageNumber.toString(),
          },
        };

        paths.push(tmpPath);
      }
    }
  }

  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps: GetStaticProps = async (context) => {
  const catalogId = context.params?.catalogid;
  const id = context.params?.id;

  if (typeof id === "string" && typeof catalogId === "string") {
    let pageId: number = parseInt(id);
    let pCatalogId: number = parseInt(catalogId);

    const nowCatalog = await prisma.catalog.findFirst({
      where: { id: pCatalogId },
    });

    let prev = false;
    let next = false;

    const page: page | null = await prisma.page.findFirst({
      where: { pageNumber: pageId, catalogId: pCatalogId },
    });
    const page2: page | null = await prisma.page.findFirst({
      where: { pageNumber: pageId + 1, catalogId: pCatalogId },
    });

    if (nowCatalog?.startPage === pageId) {
      prev = false;
    } else {
      prev = true;
    }
    if (nowCatalog?.endPage === pageId) {
      next = false;
    } else {
      next = true;
    }

    const plaiceHolder1 = await getPlaiceholder(
      `http://${page?.ip}${page?.filePath}`
    );

    let plaiceHolder2;
    if (page2) {
      plaiceHolder2 = await getPlaiceholder(
        `http://${page2?.ip}${page2?.filePath}`
      );
    } else {
      plaiceHolder2 = { img: null, base64: null };
    }

    return {
      props: {
        imageProps: {
          ...plaiceHolder1.img,
          blurDataURL: plaiceHolder1.base64,
        },
        imageProps2: {
          ...plaiceHolder2.img,
          blurDataURL: plaiceHolder2.base64,
        },
        pageProps: {
          prev,
          next,
          nowPage: pageId,
        },
      },
    };
  } else {
    return { props: {} };
  }
};

const CatalogIndex = ({ imageProps, imageProps2, pageProps }: any) => {
  const router = useRouter();
  const items = [
    {
      id: router.asPath,
    },
  ];

  const onClickPrev = () => {
    const nowPage = pageProps.nowPage;
    router.push(`/catalog/1/${nowPage - 1}`);
  };
  const onClickNext = () => {
    const nowPage = pageProps.nowPage;
    router.push(`/catalog/1/${nowPage + 1}`);
  };

  return (
    <>
      <Head>
        <title>SAMWOO MANUFACTURING CO., LTD.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=no,maximum-scale=1.0,minimum-scale=1.0"
        />
      </Head>

      <div className="flex h-screen justify-center items-center flex-col">
        <Transition
          items={items}
          keys={(items: any) => items.id}
          from={{ opacity: 0, x: -250 }}
          initial={{ opacity: 0, x: -250 }}
          enter={{ opacity: 1, x: 0 }}
          leave={{ opacity: 0, x: 250 }}
        >
          {(styles) => (
            <animated.div
              style={{
                ...styles,
                position: "absolute",
              }}
            >
              <div className="flex">
                <TransformWrapper>
                  <TransformComponent>
                    <div className="relative catalog flex">
                      <Image {...imageProps} alt="test" placeholder={"blur"} />
                    </div>
                    {imageProps2.blurDataURL && (
                      <div className="relative catalog hidden lg:flex">
                        <Image
                          {...imageProps2}
                          alt="test"
                          placeholder={"blur"}
                        />
                      </div>
                    )}
                  </TransformComponent>
                </TransformWrapper>
              </div>
              <div className="flex mt-2 justify-between">
                {pageProps.prev && (
                  <div
                    onClick={onClickPrev}
                    className="cursor-pointer bg-blue-500 rounded px-2 text-white hover:bg-blue-400 transition-all duration-200 self-start"
                  >
                    Prev
                  </div>
                )}

                <div></div>
                {pageProps.next && (
                  <div
                    onClick={onClickNext}
                    className="cursor-pointer bg-blue-500 rounded px-2 text-white hover:bg-blue-400 transition-all duration-200 self-end"
                  >
                    Next
                  </div>
                )}
              </div>
            </animated.div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default CatalogIndex;

CatalogIndex.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <CatalogLayout> {page}</CatalogLayout>
    </BaseLayout>
  );
};