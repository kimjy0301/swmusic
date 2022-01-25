import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPlaiceholder } from "plaiceholder";
import { ReactElement } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { RecoilRoot } from "recoil";
import CatalogLayout from "../../components/CatalogLayout";
import Layout from "../../components/Layout";

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
  const { base64, img } = await getPlaiceholder(
    `http://146.56.147.155/images/${context.params?.id}.JPG`
  );

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
    },
  };
};

const CatalogIndex = ({ imageProps }: any) => {
  return (
    <>
      <TransformWrapper>
        <TransformComponent>
          <div style={{ width: "30rem" }} className="relative flex">
            <Image {...imageProps} alt="test" placeholder={"blur"} />
          </div>
        </TransformComponent>
      </TransformWrapper>
      <Link href="/catalog/1">Catalog 1</Link>
      <Link href="/catalog/2">Catalog 2</Link>
      <Link href="/catalog/3">Catalog 3</Link>
      <Link href="/catalog/4">Catalog 4</Link>
      <Link href="/catalog/5">Catalog 5</Link>
    </>
  );
};

export default CatalogIndex;

CatalogIndex.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <CatalogLayout>{page}</CatalogLayout>
    </Layout>
  );
};
