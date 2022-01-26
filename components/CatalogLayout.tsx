import Link from "next/link";
import React, { useEffect, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";
import { atom, useRecoilState } from "recoil";
import { categoryNaviState, countState } from "./state/atomState";

const CatalogLayout = (props: any) => {
  const [show, setShow] = useRecoilState(categoryNaviState);
  const [count, setCount] = useRecoilState(countState);

  useEffect(() => {
    if (show == false) {
      setShow(true);
    }
  }, [show, setShow]);

  const styles = useSpring({
    to: { opacity: 1, color: "#ffaaee" },
    from: { opacity: 0, color: "red" },
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
              <div className="absolute left-0 md:w-44 w-20 text-sm md:text-2xl h-5/6 bg-slate-300 top-16 mt-2 text-center flex items-center justify-center  flex-col overflow-y-auto">
                <Link href="/catalog/1">Catalog 1</Link>
                <Link href="/catalog/2">Catalog 2</Link>
                <Link href="/catalog/3">Catalog 3</Link>
                <Link href="/catalog/4">Catalog 4</Link>
                <Link href="/catalog/5">Catalog 5</Link>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default CatalogLayout;
