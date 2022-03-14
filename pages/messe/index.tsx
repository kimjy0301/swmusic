import Image from "next/image";
import messe2 from "../../public/image/messe2.png";
import messe_img_1 from "../../public/image/messe/messe (1).jpg";
import messe_img_2 from "../../public/image/messe/messe (2).jpg";
import messe_img_3 from "../../public/image/messe/messe (3).jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

const Index = () => {
  const [carouselHeigt, setCarouselHeight] = useState(420);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setCarouselHeight(250);
    }
  }, [setCarouselHeight]);

  return (
    <>
      <div className="exhibition flex justify-center items-center">
        <div className="main-section flex flex-col">
          <div className="mt-10">
            <Image src={messe2} alt="namm" priority={true}></Image>
          </div>
          <div className="w-4/5 border-t-2 border-slate-500 my-3"></div>
          <div className="w-4/5">
            <span className="text-sm lg:text-2xl text-gray-800">
              messe frankfurt is the most successful musical instrument
              industry&apos;s leading exhibition that takes place every April
              for four days. <br></br>You can meet Samwoo at messe frankfurt.
            </span>
          </div>
          <div className="w-full h-fit my-5">
            <Carousel>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={messe_img_1}
                  alt="messe"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={messe_img_2}
                  alt="messe"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={messe_img_3}
                  alt="messe"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
