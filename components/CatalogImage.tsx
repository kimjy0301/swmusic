import Image from "next/image";
import { useEffect } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const CatalogImage = ({ imageProps, imageProps2, mobile }: any) => {
  useEffect(() => {
    if (window.innerWidth < 1024) {
      const catalogEle: HTMLBaseElement | null =
        document.querySelector(".catalog");

      console.log(catalogEle);

      if (catalogEle) {
        catalogEle.style.width = "330px";
        catalogEle.style.maxWidth = "330px";
        catalogEle.style.minWidth = "330px";

        catalogEle.style.maxHeight = "464px";
        catalogEle.style.height = "464px";
        catalogEle.style.opacity = "1";
      }
    }
  });

  return (
    <>
      <TransformWrapper initialScale={mobile ? 1.2 : 1}>
        <TransformComponent>
          <div className="relative catalog opacity-0">
            <Image
              {...imageProps}
              alt="test"
              placeholder={"blur"}
              quality={75}
              layout={"intrinsic"}
            />
          </div>
          {imageProps2.blurDataURL && (
            <div className="relative catalog hidden lg:block">
              <Image
                quality={75}
                {...imageProps2}
                alt="test"
                placeholder={"blur"}
                layout={"intrinsic"}
              />
            </div>
          )}
        </TransformComponent>
      </TransformWrapper>
    </>
  );
};

export default CatalogImage;
