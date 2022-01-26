import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPlaiceholder } from "plaiceholder";
import { ReactElement } from "react";
import { animated, Transition } from "react-spring";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import BaseLayout from "../../components/BaseLayout";
import CatalogLayout from "../../components/CatalogLayout";
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
      {
        params: {
          id: "5",
        },
      },
    ],
    fallback: false,
  };
}
export const getStaticProps: GetStaticProps = async (context) => {
  const plaiceHolder1 = await getPlaiceholder(
    `http://146.56.147.155/images/${context.params?.id}.JPG`
  );

  const dataPath: string | string[] | undefined = context.params?.id;
  let pagenum;
  if (typeof dataPath == "string") {
    pagenum = parseInt(dataPath) + 1;
  }

  const plaiceHolder2 = await getPlaiceholder(
    `http://146.56.147.155/images/${pagenum}.JPG`
  );
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
    },
  };
};

const CatalogIndex = ({ imageProps, imageProps2 }: any) => {
  const router = useRouter();
  const items = [
    {
      id: router.asPath,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col">
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
                    <div style={{ width: "30rem" }} className="relative flex">
                      <Image {...imageProps} alt="test" placeholder={"blur"} />
                    </div>
                    <div
                      style={{ width: "30rem" }}
                      className="relative hidden md:flex"
                    >
                      <Image {...imageProps2} alt="test" placeholder={"blur"} />
                    </div>
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </animated.div>
          )}
        </Transition>
        <div className="relative">
          <Link href="/catalog/1">Catalog 1</Link>
          <Link href="/catalog/2">Catalog 2</Link>
          <Link href="/catalog/3">Catalog 3</Link>
          <Link href="/catalog/4">Catalog 4</Link>
          <Link href="/catalog/5">Catalog 5</Link>
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
