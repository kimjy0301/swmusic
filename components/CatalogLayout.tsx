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
              <div className="fixed right-5 w-44 h-44 bg-black top-12 text-center flex items-center justify-center text-2xl">
                <h1>{`show=${show} / count=${count}`}</h1>
              </div>
            </animated.div>
          )
      )}

      {/* {show ? (
        <div className="fixed right-5 w-44 h-44 bg-black top-12 text-center flex items-center justify-center text-2xl">
          <h1>{`show=${show} / count=${count}`}</h1>
        </div>
      ) : (
        <animated.div style={styles}>
          <div className="fixed right-5 w-44 h-44 bg-black top-12 text-center flex items-center justify-center text-2xl">
            <h1>{`show=${show} / count=${count}`}</h1>
          </div>
        </animated.div>
      )} */}
    </>
  );
};

export default CatalogLayout;
