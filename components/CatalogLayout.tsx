import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import { content } from "./publicInterface";
import { categoryNaviState } from "./state/atomState";

const CatalogLayout = ({ children }: any) => {
  const router = useRouter();
  const { catalogid, id } = router.query;
  let numId = 0;
  if (id && typeof id === "string") {
    numId = parseInt(id);
  }
  const fetcher = (url: any) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(`/api/catalog/${catalogid}`, fetcher);

  const contents: content[] = data?.contents;

  const [show, setShow] = useRecoilState(categoryNaviState);

  const [foldedMenu, setFoldedMenu] = useState(false);

  const styles3 = useSpring({
    opacity: foldedMenu ? 0.7 : 0.8,
    width: foldedMenu ? 250 : 250,
    x: foldedMenu ? -253 : 0,
  });
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  useEffect(() => {
    if (show == false) {
      setShow(true);
    }
  }, [show, setShow]);

  return (
    <>
      {children}
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <animated.div>
                <animated.div
                  style={{ translateX: styles3.x }}
                  className="absolute border-r-1 border-b-2 border-gray-300 bg-slate-100/95 left-0 top-16 rounded shadow-lg text-sm lg:text-lg mt-2 text-center flex items-center justify-center catalog-layout "
                >
                  <div className="flex flex-col items-center h-full  overflow-y-auto scroll-smooth ">
                    <input id="name" type="text" placeholder="Search" />
                    {contents ? (
                      <>
                        {contents.map((i, key) => {
                          return (
                            <Link
                              key={key}
                              passHref
                              href={`/catalog/${i.catalogId}/${i.startPage}`}
                            >
                              <div
                                className={`my-3 px-2 hover:bg-gray-200 cursor-pointer w-full transition-all duration-100  ${
                                  numId >= i.startPage && numId <= i.endPage
                                    ? "font-bold"
                                    : ""
                                }`}
                              >
                                <div>{i.name}</div>
                                <div className="text-sm text-right">
                                  {`P${i.startPage}`} ~ {`P${i.endPage}`}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <div className="self-center flex items-center justify-center">
                          Loading...
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    className="right-0 h-full border-l-2 flex justify-center items-center border-gray-200 cursor-pointer w-10"
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
