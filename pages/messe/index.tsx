import Image from "next/image";
import messe2 from "../../public/image/messe2.png";
import messe_img_1 from "../../public/image/messe/messe (1).jpg";
import messe_img_2 from "../../public/image/messe/messe (2).jpg";
import messe_img_3 from "../../public/image/messe/messe (3).jpg";
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
        <title>MESSE | SAMWOO MANUFACTURING</title>
        <meta
          name="description"
          content="MESSE Page all patrs for guitar korea SAMWOO MANUFACTURING."
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
            <Image src={messe2} alt="namm" priority={true}></Image>
          </div>
          <div className="w-4/5 border-t-2 border-slate-500 my-3"></div>
          <div className="w-4/5">
            <p className="text-sm lg:text-2xl text-gray-800">
              Messe Frankfurt is a music fair with a long history.
              <br></br>
              SAMWOO has participated every year since its foundation in 1994.
              <br></br>
              Please visit
              <a
                href="https://www.messefrankfurt.com/frankfurt/en.html"
                rel="noreferrer"
                target={"_blank"}
              >
                <span className="text-cyan-700 hover:text-cyan-800 cursor-pointer">
                  {" "}
                  https://www.messefrankfurt.com{" "}
                </span>
              </a>
              to find out where we are at the exhibition. <br></br> We are
              waiting for you at messe frankfurt!
            </p>
          </div>
          <div className="w-full h-fit my-5">
            <Carousel showThumbs={false}>
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
