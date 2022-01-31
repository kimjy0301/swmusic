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
    width: foldedMenu ? 250 : 250,
    x: foldedMenu ? -260 : 0,
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
              <animated.div>
                <animated.div
                  style={{ translateX: styles3.x }}
                  className="absolute border-r-1 border-b-2 border-gray-300 bg-slate-100/95 left-0 top-16 catalog-layout rounded shadow-lg text-sm lg:text-lg h-5/6 mt-2 text-center flex items-center justify-center overflow-y-auto"
                >
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <Link passHref href="/catalog/1">
                        <div className="mt-3 px-2 hover:font-bold cursor-pointer w-full ">
                          <div>BLISTER PACKING OR VINLY PACKING</div>
                          <div className="text-sm text-right">P119 ~ 130</div>
                        </div>
                      </Link>
                      <Link passHref href="/catalog/2">
                        <div className="mt-3 px-2 hover:font-bold cursor-pointer w-full ">
                          <div>ACCESSORIES</div>
                          <div className="text-sm text-right">P30 ~ 140</div>
                        </div>
                      </Link>
                      <Link passHref href="/catalog/3">
                        <div className="mt-3 px-2 hover:font-bold cursor-pointer w-full ">
                          <div>BLISTER PACKING OR VINLY PACKING</div>
                          <div className="text-sm text-right">P149 ~ 160</div>
                        </div>
                      </Link>
                      <Link passHref href="/catalog/4">
                        <div className="mt-3 px-2 hover:font-bold cursor-pointer w-full ">
                          <div>MACHINE HEAD OR TUNING KEY</div>
                          <div className="text-sm text-right">P179 ~ 180</div>
                        </div>
                      </Link>
                    </div>
                  </>

                  <div
                    className="right-0 h-full border-l-2 flex justify-center items-center border-gray-200 cursor-pointer"
                    onClick={() => {
                      setFoldedMenu(!foldedMenu);
                    }}
                  >
                    {foldedMenu ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-700"
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
                        className="h-6 w-6 text-gray-700"
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
