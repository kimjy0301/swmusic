import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../public/logo.png";

const MainPage2 = () => {
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

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="main-section">
          <Image
            className="img"
            src={logo}
            alt={"swmusic logo"}
            priority={true}
          ></Image>
        </div>
        <div className="main-section">
          For good music, to find good sound, and to provide good service.
        </div>
        <div className="main-section">
          &apos;SAMWOO&apos; was established in 1994 and has been providing the
          best quality and service until now. Our goal is to satisfy our
          customers and provide the highest quality products at an affordable
          price.
        </div>
        <div className="main-section">
          Together with people who love music and love the guitar, We want to
          help make the world warmer and more beautiful. We always strives for
          R&amp;D and develop for convenient management and good quality of
          customers.
        </div>
        <div className="main-section">
          We handle all parts necessary for guitar. If you have any questions,
          please send an e-mail to SAMWOO@SWMUSIC.CO.KR or use the Contact us
          page on our website. Welcome to our website! The &apos;SAMWOO&apos;
          Team.
        </div>
        <div className="w-screen py-16 flex flex-col justify-center items-center  ">
          <div className="text-4xl font-bold font-sans">CATALOG</div>
          <div className="w-5/6 border-b-2 border-gray-600 my-10"></div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Link passHref href="/catalog/1/1">
              <div className="relative w-64 h-64 bg-slate-400 m-6 rounded shadow-xl flex justify-center items-center cursor-pointer text-xl font-semibold catalog-card1 hover:scale-105 transition-all duration-200">
                <div className="absolute -bottom-8"> Main CATALOG</div>
              </div>
            </Link>
            <Link passHref href="/catalog/2/1">
              <div className="relative w-64 h-64 bg-slate-400 m-6 rounded shadow-xl flex justify-center items-center cursor-pointer text-xl font-semibold catalog-card2 hover:scale-105 transition-all duration-200">
                <div className="absolute -bottom-8">2022 New Items</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage2;
