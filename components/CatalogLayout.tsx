import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { animated, useSpring, useTransition } from "react-spring";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import { content, page } from "./publicInterface";
import { categoryNaviState } from "./state/atomState";

type Inputs = {
  searchText: string;
};
const CatalogLayout = ({ children }: any) => {
  const router = useRouter();
  const { catalogid, id } = router.query;
  let numId = 0;
  if (id && typeof id === "string") {
    numId = parseInt(id);
  }
  const fetcher = (url: any) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(`/api/catalog/${catalogid}`, fetcher);

  let contents: content[] = data?.contents;
  let pages: page[] = data?.pages;

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

  const { register, watch } = useForm<Inputs>();

  useEffect(() => {
    if (show == false) {
      setShow(true);
    }
  }, [show, setShow]);

  let searchTextValue = watch("searchText");

  const tagPages: page[] = [];

  if (searchTextValue && data) {
    contents = contents.filter((value) =>
      value.name.includes(searchTextValue.toUpperCase())
    );

    for (let i = 0; i < pages.length; i++) {
      const element: page = pages[i];

      if (element.tag.toUpperCase().includes(searchTextValue.toUpperCase())) {
        tagPages.push(element);
      }
    }
  }

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
                  {contents ? (
                    <div className="flex flex-col items-center h-full scroll-smooth overflow-x-hidden w-full">
                      <div>
                        <input
                          className="my-2 shadow-md h-10 w-48 rounded px-2 focus:border-2 focus:border-cyan-600"
                          {...register("searchText")}
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                      <div className="flex flex-col items-center h-full  overflow-y-auto scroll-smooth overflow-x-hidden w-full">
                        {contents.map((i, key) => {
                          return (
                            <Link
                              key={key}
                              passHref
                              href={`/catalog/${i.catalogId}/${i.startPage}`}
                            >
                              <div
                                className={`my-3 px-2 hover:bg-cyan-600 hover:text-white text-base font-semibold cursor-pointer w-full transition-all duration-100  ${
                                  numId >= i.startPage && numId <= i.endPage
                                    ? "bg-cyan-600 text-white "
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

                        {tagPages.length > 0 && (
                          <>
                            <div className="px-2 border-2 w-5/6 border-cyan-600 "></div>
                          </>
                        )}
                        {tagPages.map((i, key) => {
                          return (
                            <Link
                              key={key}
                              passHref
                              href={`/catalog/${i.catalogId}/${i.pageNumber}`}
                            >
                              <div
                                className={`my-3 px-2 hover:bg-cyan-600 hover:text-white text-base font-semibold cursor-pointer w-full transition-all duration-100  ${
                                  numId === i.pageNumber
                                    ? "bg-cyan-600 text-white "
                                    : ""
                                }`}
                              >
                                {i.tag.split("/").map((value, key) => {
                                  if (
                                    value
                                      .toUpperCase()
                                      .includes(searchTextValue.toUpperCase())
                                  ) {
                                    return <div key={key}>{value}</div>;
                                  }
                                })}

                                <div className="text-sm text-right">
                                  {`P${i.pageNumber}`}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="my-3 px-2 w-full flex items-center justify-center h-full">
                        <Oval
                          ariaLabel="loading-indicator"
                          height={45}
                          width={45}
                          strokeWidth={5}
                          strokeWidthSecondary={5}
                          color="#2A6F85"
                          secondaryColor="trnasparent"
                        />
                      </div>
                    </>
                  )}
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
