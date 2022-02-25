import Image from "next/image";
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
          <Image src={logo} alt={"swmusic logo"} priority={true}></Image>
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
          customers. We handle all parts necessary for guitar. If you have any
          questions, please send an e-mail to SAMWOO@SWMUSIC.CO.KR or use the
          Contact us page on our website. Welcome to our website! The
          &apos;SAMWOO&apos; Team.
        </div>
      </div>
    </>
  );
};

export default MainPage2;
