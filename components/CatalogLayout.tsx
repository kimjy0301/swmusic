import Link from "next/link";
import React, { useEffect, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";
import { atom, useRecoilState } from "recoil";
import { categoryNaviState, countState } from "./state/atomState";

const CatalogLayout = (props: any) => {
  const [show, setShow] = useRecoilState(categoryNaviState);

  const [foldedMenu, setFoldedMenu] = useState(false);

  useEffect(() => {
    if (show == false) {
      setShow(true);
    }
  }, [show, setShow]);

  const styles3 = useSpring({
    opacity: foldedMenu ? 0.7 : 0.8,
    width: foldedMenu ? 23 : 250,
  });
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  return (
    <>
      {props.children}
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <animated.div style={{ opacity: styles3.opacity }}>
                <animated.div
                  style={{ width: styles3.width }}
                  className="absolute bg-slate-100/95 left-0 top-16 catalog-layout rounded shadow-lg text-sm lg:text-lg h-5/6 mt-2 text-center flex items-center justify-center overflow-y-auto"
                >
                  {foldedMenu || (
                    <>
                      <div className="flex flex-col items-center justify-center">
                        <Link href="/catalog/1">
                          <a className="mt-1 mx-2 hover:font-bold">
                            BLISTER PACKING OR VINLY PACKING
                          </a>
                        </Link>
                        <Link href="/catalog/2">
                          <a className="mt-1 mx-2 hover:font-bold">
                            ACCESSORIES
                          </a>
                        </Link>
                        <Link href="/catalog/3">
                          <a className="mt-1 mx-2 hover:font-bold">
                            MACHINE HEAD OR TUNING KEY
                          </a>
                        </Link>
                        <Link href="/catalog/4">
                          <a className="mt-1 mx-2 hover:font-bold">
                            BLISTER PACKING OR VINLY PACKING
                          </a>
                        </Link>
                      </div>
                    </>
                  )}
                  <div
                    className="right-0 h-full border-l-2 flex justify-center items-center border-white  "
                    onClick={() => {
                      setFoldedMenu(!foldedMenu);
                    }}
                  >
                    {foldedMenu ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                        />
                      </svg>
                    )}
                  </div>
                </animated.div>
              </animated.div>
            </animated.div>
          )
      )}
    </>
  );
};

export default CatalogLayout;
