import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import main0 from "../public/image/main_0.jpg";
import main2 from "../public/image/main_2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animated, useSpring } from "react-spring";
interface MainPage2Props {
  main: Boolean;
}
const MainPage2 = ({ main }: MainPage2Props) => {
  const [imgWidth, setImgWidth] = useState(500);
  const [imgHeight, setImgHeight] = useState(500);
  const [scrollSize, setScrollSize] = useState(100);
  const [mainImgHeight, setMainImgHeight] = useState(1082);
  const [mainImgWidth, setMainImgWidth] = useState(1920);

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
    window.addEventListener("resize", () => {
      setMainImgHeight(window.innerHeight);
      setMainImgWidth(window.innerWidth);
    });

    if (main) {
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray<HTMLElement>(".main-section");

      sections.forEach((mainSection, i) => {
        if (i === 2) {
          ScrollTrigger.create({
            trigger: mainSection,
            start: "bottom 0",
            pin: false,
            pinSpacing: true,
            snap: 1,
            scrub: 1,
            markers: false,
          });
        } else {
          ScrollTrigger.create({
            trigger: mainSection,
            start: "top top",
            pin: false,
            pinSpacing: false,
            snap: 1,
            scrub: 1,
            markers: false,
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
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setImgHeight(100);
      setImgWidth(100);
      setScrollSize(20);
    }

    setMainImgHeight(window.innerHeight);
    setMainImgWidth(window.innerWidth);
  }, [
    setImgHeight,
    setImgWidth,
    setScrollSize,
    setMainImgHeight,
    setMainImgWidth,
  ]);

  return (
    <>
      <div className="w-full h-full main-bg relative scroll-smooth">
        <div
          className="fixed w-auto h-auto top-0 left-0 -z10"
          style={{ width: mainImgWidth, height: mainImgHeight }}
        >
          <Image
            src={main0}
            alt={"main img"}
            priority={true}
            layout={"fill"}
            objectFit={"cover"}
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-center">
          {main && (
            <div className="main-section flex flex-col relative">
              <div
                onClick={() => window.scroll(0, scrollSize)}
                className="p-3 lg:p-10 bg-rounded rounded-full main-section-card z-10  hover:scale-105 cursor-pointer transition-all"
              >
                <div className="p-3 lg:p-10 bg-white rounded-full ">
                  <Image
                    className="img"
                    src={logo}
                    alt={"swmusic logo"}
                    priority={true}
                  ></Image>
                </div>
              </div>
            </div>
          )}
          {/* <div className="main-section main-section-card z-10 ">
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
          </div> */}
          <div className="main-section main-section-card z-10">
            <div className="bg-rounded lg:px-10 px-2 py-3 lg:py-10 h-auto text-sm lg:text-lg flex flex-col justify-center items-center rounded-xl shadow-lg relative">
              <div className="w-full px-2 first-letter:font-bold text-xs lg:first-letter:text-2xl lg:text-xl text-white z-20">
                <div className="mb-3">
                  <h1 className="text-lg lg:text-2xl lg:my-3 font-semibold ">
                    SAMWOO
                  </h1>
                  <h2 className="text-base lg:text-xl lg:my-3 font-semibold ">
                    ALL PARTS FOR GUITAR
                  </h2>
                </div>
                <div className="w-full border-t-2 border-white my-3"></div>
                For good music, to find good sound, and to provide good service.
                <br></br>
                <br></br>
                &apos;SAMWOO&apos; was established in 1994 and has been
                providing the best quality and service until now. <br></br>
                <br></br> Our goal is to satisfy our customers and provide the
                highest quality products at an affordable price.<br></br>
                <br></br>
              </div>
              <div className="w-full px-2 first-letter:font-bold text-xs lg:first-letter:text-2xl lg:text-xl text-white z-20">
                Together with people who love music and love the guitar,
                <br></br>
                <br></br> We want to help make the world warmer and more
                beautiful.<br></br>
                <br></br> We always strives for R&amp;D and develop for
                convenient management and good quality of customers.<br></br>
                <br></br>
              </div>

              <div className="w-full px-2 first-letter:font-bold text-xs lg:first-letter:text-2xl lg:text-xl text-white z-20">
                We handle all parts necessary for guitar.<br></br>
                <br></br> If you have any questions, please send an e-mail to
                <a
                  href="mailto:samwoo@swmusic.co.kr"
                  className="text-amber-700 hover:text-amber-800 text-xs lg:text-lg break-words"
                >
                  {" "}
                  SAMWOO@SWMUSIC.CO.KR{" "}
                </a>
                or use the
                <Link passHref href="/contact">
                  <span className="text-amber-700 hover:text-amber-800 cursor-pointer">
                    {" "}
                    Contact{" "}
                  </span>
                </Link>
                us page on our website.
              </div>
              <div className="shadow-xl w-full h-full bottom-0 left-0 absolute opacity-10 z-10">
                <Image
                  width={mainImgWidth}
                  className="img rounded-lg"
                  src={main2}
                  alt={"main image 2"}
                  layout={"responsive"}
                  priority={true}
                  objectFit={"fill"}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-screen py-16 flex flex-col justify-center items-center main-section bg-slate-100 z-10">
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
