import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import main1 from "../public/image/main_1.jpg";
import main2 from "../public/image/main_2.jpg";
import main3 from "../public/image/main_3.jpg";
import main4 from "../public/image/main_4.jpg";
import main5 from "../public/image/main_5.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MainPage2 = () => {
  const [imgWidth, setImgWidth] = useState(500);
  const [imgHeight, setImgHeight] = useState(500);
  const controlScrollY = () => {
    const headerdiv = document.querySelector(".main-header");

    if (window.scrollY > 5) {
      headerdiv?.classList.remove("opacity-0");
      headerdiv?.classList.remove("-top-16");
      headerdiv?.classList.add("opacity-100");
      headerdiv?.classList.add("top-0");
    } else {
      headerdiv?.classList.remove("opacity-100");
      headerdiv?.classList.remove("top-0");
      headerdiv?.classList.add("opacity-0");
      headerdiv?.classList.add("-top-16");
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray<HTMLElement>(".main-section");

    sections.forEach((mainSection, i) => {
      if (i === 5) {
        ScrollTrigger.create({
          trigger: mainSection,
          start: "bottom 0",
          pin: false,
          pinSpacing: true,
          snap: 1,
          scrub: 0.001,
          markers: true,
        });
      } else {
        ScrollTrigger.create({
          trigger: mainSection,
          start: "top top",
          pin: false,
          pinSpacing: false,
          snap: 1,
          scrub: 0.001,
          markers: true,
        });
      }
    });

    const headerdiv = document.querySelector(".main-header");
    headerdiv?.classList.add("-top-16");
    if (window.scrollY > 5) {
      headerdiv?.classList.remove("opacity-0");
      headerdiv?.classList.add("opacity-100");
      headerdiv?.classList.add("top-0");
    }

    window.addEventListener("scroll", controlScrollY);
    return () => {
      headerdiv?.classList.remove("-top-16");
      headerdiv?.classList.remove("opacity-0");
      headerdiv?.classList.add("opacity-100");
      headerdiv?.classList.add("top-0");
      window.removeEventListener("scroll", controlScrollY);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setImgHeight(170);
      setImgWidth(170);
    }
  }, [setImgHeight, setImgWidth]);

  return (
    <>
      <div className="w-full h-full main-bg">
        <div className="flex flex-col justify-center items-center">
          <div className="main-section ">
            <div className="p-10 bg-cyan-700 rounded-full main-section-card">
              <div className="p-10 bg-white rounded-full ">
                <Image
                  className="img"
                  src={logo}
                  alt={"swmusic logo"}
                  priority={true}
                ></Image>
              </div>
            </div>
          </div>
          <div className="main-section main-section-card">
            <div className="bg-white lg:px-10 px-2 py-3 lg:py-12 h-2/3 text-sm lg:text-lg flex justify-between items-center rounded-xl shadow-lg">
              <div>
                <Image
                  className="img rounded-lg"
                  src={main1}
                  alt={"main image 1"}
                  width={imgWidth}
                  height={imgHeight}
                  layout={"intrinsic"}
                  priority={true}
                ></Image>
              </div>
              <div className="h-full border-r-2 border-gray-500"></div>
              <div className="w-1/3">
                For good music, to find good sound, and to provide good service.
              </div>
            </div>
          </div>
          <div className="main-section main-section-card">
            <div className="bg-white lg:px-10 px-2 py-3 lg:py-12 h-2/3 text-sm lg:text-lg flex justify-between items-center rounded-xl shadow-lg">
              <div className="w-1/3">
                &apos;SAMWOO&apos; was established in 1994 and has been
                providing the best quality and service until now. Our goal is to
                satisfy our customers and provide the highest quality products
                at an affordable price.
              </div>

              <div className="h-full border-r-2 border-gray-500"></div>
              <div className="">
                <Image
                  className="img rounded-lg"
                  src={main2}
                  alt={"main image 2"}
                  width={imgWidth}
                  height={imgHeight}
                  layout={"intrinsic"}
                  priority={true}
                ></Image>
              </div>
            </div>
          </div>
          <div className="main-section main-section-card">
            <div className="bg-white lg:px-10 px-2 py-3 lg:py-12 h-2/3 text-sm lg:text-lg flex justify-between items-center rounded-xl shadow-lg">
              <div className="">
                <Image
                  className="img rounded-lg"
                  src={main3}
                  alt={"main image 3"}
                  width={imgWidth}
                  height={imgHeight}
                  layout={"intrinsic"}
                  priority={true}
                ></Image>
              </div>
              <div className="h-full border-r-2 border-gray-500"></div>
              <div className="w-1/3">
                Together with people who love music and love the guitar, We want
                to help make the world warmer and more beautiful. We always
                strives for R&amp;D and develop for convenient management and
                good quality of customers.
              </div>
            </div>
          </div>
          <div className="main-section main-section-card">
            <div className="bg-white lg:px-10 px-2 py-3 lg:py-12 h-2/3 text-sm lg:text-lg flex justify-between items-center rounded-xl shadow-lg">
              <div className="w-1/3">
                We handle all parts necessary for guitar. If you have any
                questions, please send an e-mail to SAMWOO@SWMUSIC.CO.KR or use
                the Contact us page on our website. Welcome to our website! The
                &apos;SAMWOO&apos; Team.
              </div>

              <div className="h-full border-r-2 border-gray-500"></div>
              <div className="">
                <Image
                  className="img rounded-lg"
                  src={main4}
                  alt={"main image 4"}
                  width={imgWidth}
                  height={imgHeight}
                  layout={"intrinsic"}
                  priority={true}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-screen py-16 flex flex-col justify-center items-center main-section bg-slate-100">
            <div className="text-2xl lg:text-4xl font-bold font-sans">
              CATALOG
            </div>
            <div className="w-5/6 border-b-2 border-gray-600 my-3 lg:my-10"></div>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <Link passHref href="/catalog/1/1">
                <div className="relative  lg:w-64 lg:h-64 w-40 h-40 bg-slate-400 m-6 rounded shadow-xl flex justify-center items-center cursor-pointer text-base lg:text-xl font-semibold catalog-card1 hover:scale-105 transition-all duration-200">
                  <div className="absolute -bottom-8"> Main CATALOG</div>
                </div>
              </Link>
              <Link passHref href="/catalog/2/1">
                <div className="relative lg:w-64 lg:h-64 w-40 h-40 bg-slate-400 m-6 rounded shadow-xl flex justify-center items-center cursor-pointer text-base lg:text-xl font-semibold catalog-card2 hover:scale-105 transition-all duration-200">
                  <div className="absolute -bottom-8">2022 New Items</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage2;
