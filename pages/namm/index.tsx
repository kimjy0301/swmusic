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
import Head from "next/head";

const Index = () => {
  const [carouselHeigt, setCarouselHeight] = useState(420);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setCarouselHeight(250);
    }
  }, [setCarouselHeight]);

  return (
    <>
      <Head>
        <title>NAMM | SAMWOO MANUFACTURING</title>
        <meta
          name="description"
          content="NAMM Page all patrs for guitar korea SAMWOO MANUFACTURING."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="QbfEjI-CV9tEUfIi3AUzHr0l72sFMkKeDnSgQeNcfwE"
        />
      </Head>
      <div className="exhibition flex justify-center items-center">
        <div className="main-section flex flex-col">
          <div className="mt-10">
            <Image src={namm2} alt="namm" priority={true}></Image>
          </div>
          <div className="w-4/5 border-t-2 border-slate-500 my-3"></div>
          <div className="w-4/5">
            <br></br>
            <p className="text-sm lg:text-2xl lg:leading-10 text-gray-800 font-bold">
              2024 NAMM SHOW - HALL D BOOTHS 4024
              <br></br>
              <br></br>
            </p>
            <p className="text-sm lg:text-2xl lg:leading-10 text-gray-800">
              The NAMM Show is the world&apos;s largest fair.
              <br></br>
              SAMWOO has participated in the NAMM SHOW every year since its
              foundation in 1994.
              <br></br>
              Visit
              <a
                href="https://www.namm.org/"
                rel="noreferrer"
                target={"_blank"}
              >
                <span className="text-cyan-700 hover:text-cyan-800 cursor-pointer">
                  {" "}
                  https://www.namm.org/{" "}
                </span>
              </a>
              and search our exhibition location! <br></br> We are waiting for
              you at NAMM!
            </p>
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
