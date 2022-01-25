import React, { useEffect, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";
import { atom, useRecoilState } from "recoil";
import { categoryNaviState } from "./state/atomState";

const CatalogLayout = (props: any) => {
  const [show, setShow] = useRecoilState(categoryNaviState);

  useEffect(() => {
    if (show == false) {
      setShow(true);
      console.log(show);
    }
  }, [show, setShow]);

  const styles = useSpring({
    to: { opacity: 1, color: "#ffaaee" },
    from: { opacity: 0, color: "red" },
  });

  return (
    <>
      {props.children}
      {show ? (
        <div className="fixed right-5 w-44 h-44 bg-black top-12 text-center flex items-center justify-center text-2xl">
          Catalog layout
        </div>
      ) : (
        <animated.div style={styles}>
          <div className="fixed right-5 w-44 h-44 bg-black top-12 text-center flex items-center justify-center text-2xl">
            Catalog layout
          </div>
        </animated.div>
      )}
    </>
  );
};

export default React.memo(CatalogLayout);
