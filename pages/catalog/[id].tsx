import { GetStaticProps } from "next";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

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
      <div
        style={{ width: "40rem", height: "50rem" }}
        className="relative bg-slate-500 "
      >
        <TransformWrapper>
          <TransformComponent>
            <div
              style={{ width: "40rem", height: "50rem" }}
              className="relative bg-slate-500 flex items-center justify-center mt-16"
            >
              <div
                style={{ width: "30rem", height: "42rem" }}
                className="relative flex"
              >
                <Image {...imageProps} alt="test" placeholder={"blur"} />
              </div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </>
  );
};

export default CatalogIndex;
