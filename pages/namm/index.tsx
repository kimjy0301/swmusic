import Image from "next/image";
import namm2 from "../../public/image/namm2.png";
import namm_img_1 from "../../public/image/namm/namm (1).jpg";
import namm_img_2 from "../../public/image/namm/namm (2).jpg";
import namm_img_3 from "../../public/image/namm/namm (3).jpg";
import namm_img_4 from "../../public/image/namm/namm (4).jpg";
import namm_img_5 from "../../public/image/namm/namm (5).jpg";
import namm_img_6 from "../../public/image/namm/namm (6).jpg";
import namm_img_7 from "../../public/image/namm/namm (7).jpg";
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
            <Image src={namm2} alt="namm" priority={true}></Image>
          </div>
          <div className="w-4/5 border-t-2 border-slate-500 my-3"></div>
          <div className="w-4/5">
            <span className="text-base lg:text-2xl text-gray-800">
              SAMWOO participates in NAMM, the world&apos;s largest music
              industry exhibition, and presents our products. <br></br> You can
              meet Samwoo at NAMM.
            </span>
          </div>
          <div className="w-full h-fit my-5">
            <Carousel showThumbs={false}>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={namm_img_1}
                  alt="namm"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={namm_img_2}
                  alt="namm"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={namm_img_3}
                  alt="namm"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={namm_img_4}
                  alt="namm"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={namm_img_5}
                  alt="namm"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={namm_img_6}
                  alt="namm"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div
                style={{ height: carouselHeigt }}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={namm_img_7}
                  alt="namm"
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
