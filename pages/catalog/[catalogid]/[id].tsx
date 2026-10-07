import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getPlaiceholder } from "plaiceholder";
import { ReactElement, useEffect, useState } from "react";
import { animated, Transition } from "react-spring";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import BaseLayout from "../../../components/BaseLayout";
import CatalogImage from "../../../components/CatalogImage";
import CatalogLayout from "../../../components/CatalogLayout";
import { prisma } from "../../../components/client";

import { catalog, page } from "../../../components/publicInterface";

// page.ip(146.56.147.155)는 이 주소로 301 리다이렉트되며, plaiceholder는 리다이렉트를 처리하지 못한다
const IMAGE_HOST = "https://kimjiyong.co.kr";

// 이미지 서버가 빌드 중 동시 요청을 다 받지 못해 연결이 멈추는 경우가 있어, 실패해도 페이지 생성이 막히지 않게 한다
const PLACEHOLDER_TIMEOUT_MS = 10000;
const FALLBACK_IMAGE = {
  width: 2479,
  height: 3508,
  blurDataURL:
    "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
};

const getImageProps = async (src: string) => {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const { img, base64 } = await Promise.race([
        getPlaiceholder(src),
        new Promise<never>((_, reject) =>
          setTimeout(
            () => reject(new Error(`timeout: ${src}`)),
            PLACEHOLDER_TIMEOUT_MS
          )
        ),
      ]);
      return { ...img, blurDataURL: base64 };
    } catch (e) {
      console.warn(`getPlaiceholder failed (${attempt + 1}/2): ${src}`, e);
    }
  }
  return { ...FALLBACK_IMAGE, src };
};

export async function getStaticPaths() {
  const catalogs: catalog[] = await prisma.catalog.findMany({
    include: { pages: { orderBy: { pageNumber: "asc" } } },
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

    let catalogName = "";
    let tags = "";

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

    const [imageProps, imageProps2] = await Promise.all([
      getImageProps(`${IMAGE_HOST}${page?.filePath}`),
      page2
        ? getImageProps(`${IMAGE_HOST}${page2.filePath}`)
        : Promise.resolve({ blurDataURL: null }),
    ]);

    if (page) {
      tags = page.tag;
    }
    if (nowCatalog) {
      catalogName = nowCatalog.name;
    }

    return {
      props: {
        imageProps,
        imageProps2,
        pageProps: {
          prev,
          next,
          nowPage: pageId,
          nowCatalog: pCatalogId,
          tags: tags,
          catalogName: catalogName,
        },
      },
    };
  } else {
    return { props: {} };
  }
};

const CatalogIndex = ({ imageProps, imageProps2, pageProps }: any) => {
  const [mobile, setMobile] = useState(false);
  const router = useRouter();
  const items = [
    {
      id: router.asPath,
    },
  ];
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setMobile(true);
    }
  }, [mobile, setMobile]);

  useEffect(() => {
    const divEle: HTMLElement | null = document.querySelector(".catalog-div");
    if (divEle) {
      divEle.style.height = window.innerHeight.toString();
    }
  }, []);
  // useEffect(() => {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }, []);

  const onClickPrev = () => {
    const nowPage = pageProps.nowPage;
    const nowCatalog = pageProps.nowCatalog;
    router.push(`/catalog/${nowCatalog}/${nowPage - 1}`);
  };
  const onClickNext = () => {
    const nowPage = pageProps.nowPage;
    const nowCatalog = pageProps.nowCatalog;
    router.push(`/catalog/${nowCatalog}/${nowPage + 1}`);
  };

  return (
    <>
      <Head>
        <title>{`${pageProps.catalogName} | SAMWOO MANUFACTURING`}</title>
        <meta
          name="description"
          content={`${pageProps.catalogName} Page all patrs for guitar korea SAMWOO MANUFACTURING, ${pageProps.tags}`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=no,maximum-scale=1.0,minimum-scale=1.0"
        />
        <meta
          name="google-site-verification"
          content="QbfEjI-CV9tEUfIi3AUzHr0l72sFMkKeDnSgQeNcfwE"
        />
      </Head>

      <div className="flex relative catalog-div justify-center items-center flex-col  bg-slate-700">
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
                <CatalogImage
                  imageProps={imageProps}
                  imageProps2={imageProps2}
                  mobile={mobile}
                ></CatalogImage>
              </div>
            </animated.div>
          )}
        </Transition>
        <div className="flex absolute h-20 w-full mt-2 bottom-0 lg:-bottom-8 items-start justify-between catalog-button">
          {pageProps.prev && (
            <div
              onClick={onClickPrev}
              className="cursor-pointer bg-cyan-600 rounded px-2 text-xl text-white hover:bg-cyan-700 transition-all duration-200 "
            >
              Prev
            </div>
          )}

          <div></div>
          <div className="text-gray-50 text-lg absolute left-1/3 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            You can zoom in &amp; out by turning the mouse wheel.
          </div>

          <div className="text-gray-50 text-sm absolute bottom-4 left-4 block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            You can zoom in &amp; out using two fingers.
          </div>

          {pageProps.next && (
            <div
              onClick={onClickNext}
              className="cursor-pointer bg-cyan-600 rounded px-2 text-xl text-white hover:bg-cyan-700 transition-all duration-200 "
            >
              Next
            </div>
          )}
        </div>
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
