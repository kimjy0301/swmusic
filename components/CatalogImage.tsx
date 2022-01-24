import { GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";

export const getStaticProps: GetStaticProps = async (props) => {
  console.log(props);
  const { base64, img } = await getPlaiceholder(
    "http://146.56.147.155/images/2.JPG"
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

const CatalogImage = () => {
  return <></>;
};

export default CatalogImage;
