import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useRecoilState } from "recoil";
import logo from "../public/logo.png";
import messe2 from "../public/image/messe2.png";
import namm2 from "../public/image/namm2.png";
import korea_flag from "../public/Flag_of_South_Korea.svg";
import { ProgressBar } from "./progress/ProgressBar";
import { isLoadingState } from "./state/atomState";
const Header = () => {
  const [LoadingState, setLoadingState] = useRecoilState(isLoadingState);
  const router = useRouter();
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const styles3 = useSpring({
    opacity: showDropMenu ? 1 : 0,
    height: showDropMenu ? 0 : -100,
    x: showDropMenu ? 0 : 200,
  });
  const styles4 = useSpring({
    opacity: showCatalog ? 1 : 0,
    height: showCatalog ? 0 : -100,
    x: showCatalog ? 0 : 200,
  });

  useEffect(() => {
    const handleStart = () => {
      setLoadingState(true);

      setTimeout(() => {
        setLoadingState(false);
      }, 5000);
    };

    const handleStop = () => {
      setLoadingState(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router, setLoadingState]);

  return (
    <>
      <div
        className={`${
          router.asPath === "/" && "opacity-0"
        } main-header w-screen flex justify-between h-16 items-center bg-white/90 fixed top-0 z-50 min-w-min shadow-lg transition-all duration-500`}
      >
        <div className="relative md:w-48 w-40 flex items-center justify-center cursor-pointer ml-2 md:ml-10 mt-1">
          <Link href="/">
            <a>
              <Image src={logo} alt={"swmusic logo"} priority={true}></Image>
            </a>
          </Link>

          <div className="absolute top-0 left-40 lg:left-48 h-full rounded overflow-hidden flex justify-center items-center">
            <Image
              width={100}
              height={50}
              layout="fixed"
              src={korea_flag}
              alt={"KOREA Flag"}
              priority={true}
            ></Image>
          </div>
        </div>

        <div className="hidden md:flex h-full justify-center items-center">
          <Link passHref href="/about">
            <div className="font-semibold text-2xl border-b-4 border-transparent hover:text-cyan-600 hover:border-cyan-600 h-full cursor-pointer mx-8 select-none flex items-center transition-all duration-150">
              ABOUT US
            </div>
          </Link>
          <Link passHref href="/catalog/1/0">
            <div
              className="h-full relative"
              onMouseLeave={() => setShowDropMenu(false)}
            >
              <div
                onMouseOver={() => setShowDropMenu(true)}
                className="font-semibold text-2xl border-b-4 border-transparent hover:text-cyan-600 hover:border-cyan-600 h-full cursor-pointer mx-8 select-none flex items-center transition-all duration-150 "
              >
                CATALOG
              </div>

              <animated.div
                style={{
                  opacity: styles3.opacity,
                }}
              >
                <div className="flex flex-col bg-white/90 items-center justify-center rounded-b-lg shadow-lg">
                  <Link passHref href="/catalog/2/1">
                    <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150">
                      2024 New Items
                    </div>
                  </Link>
                  <Link passHref href="/catalog/1/0">
                    <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150">
                      Main Catalog
                    </div>
                  </Link>
                </div>
              </animated.div>
            </div>
          </Link>
          <Link passHref href="/contact">
            <div className="font-semibold text-2xl border-b-4 border-transparent hover:text-cyan-600 hover:border-cyan-600 h-full cursor-pointer mx-8 select-none flex items-center transition-all duration-150 ">
              CONTACT US
            </div>
          </Link>
          <Link passHref href="/namm">
            <div className="border-b-4 border-transparent hover:text-cyan-600 hover:border-cyan-600 h-full cursor-pointer mx-2 select-none flex items-center transition-all duration-150 ">
              <Image
                height={45}
                width={180}
                src={namm2}
                alt="namm"
                priority={true}
              ></Image>
            </div>
          </Link>
          <Link passHref href="/messe">
            <div className="border-b-4 border-transparent hover:text-cyan-600 hover:border-cyan-600 h-full cursor-pointer mx-2 select-none flex items-center transition-all duration-150 ">
              <Image src={messe2} alt="messe" priority={true}></Image>
            </div>
          </Link>
        </div>

        <div className="flex md:hidden px-3 flex-col">
          <div className="h-16 flex item justify-center items-center">
            <svg
              onClick={() => setShowDropMenu(!showDropMenu)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer select-none text-gray-800 block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {showDropMenu && (
            <animated.div
              style={{
                opacity: styles3.opacity,
                translateX: styles3.x,
              }}
              className="w-44 absolute right-0 top-16 flex flex-col bg-white/90 items-end justify-center rounded-b-lg shadow-lg pr-5"
            >
              <Link href="/about">
                <a>
                  <div className="font-semibold my-3 text-lg hover:text-cyan-600 border-cyan-600 h-full cursor-pointer mx-2 select-none ">
                    ABOUT US
                  </div>
                </a>
              </Link>
              <div
                onClick={() => setShowCatalog(!showCatalog)}
                className="font-semibold my-3 text-lg hover:text-cyan-600 border-cyan-600 h-full cursor-pointer mx-2 select-none flex items-center justify-center"
              >
                CATALOG
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg> */}
              </div>
              {showCatalog && (
                <animated.div
                  style={{ opacity: styles4.opacity }}
                  className="border-y-2 border-cyan-600"
                >
                  <div className="text-right w-full">
                    <Link href="/catalog/2/1">
                      <a>
                        <div className="font-semibold my-2  hover:text-cyan-600 border-cyan-600 h-full cursor-pointer mx-2 select-none ">
                          2024 New Items
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="text-right w-full">
                    <Link href="/catalog/1/0">
                      <a>
                        <div className="font-semibold my-2  hover:text-cyan-600 border-cyan-600 h-full cursor-pointer mx-2 select-none ">
                          Main Catalog
                        </div>
                      </a>
                    </Link>
                  </div>
                </animated.div>
              )}
              <Link href="/contact">
                <a>
                  <div className="font-semibold my-3 text-lg hover:text-cyan-600 border-cyan-600 h-full cursor-pointer mx-2 select-none ">
                    CONTACT US
                  </div>
                </a>
              </Link>
              <Link href="/namm">
                <a className="font-semibold my-3 text-lg hover:text-cyan-600 border-cyan-600 h-full cursor-pointer ml-2 -mr-2 select-none">
                  <Image src={namm2} alt="namm"></Image>
                </a>
              </Link>
              <Link href="/messe">
                <a className="font-semibold my-3 text-lg hover:text-cyan-600 border-cyan-600 h-full cursor-pointer ml-2 -mr-2 select-none">
                  <Image src={messe2} alt="messe"></Image>
                </a>
              </Link>
            </animated.div>
          )}
        </div>
      </div>
      <ProgressBar isAnimating={LoadingState}></ProgressBar>
    </>
  );
};

export default Header;
