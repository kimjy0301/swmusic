import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

const CatalogLayout = (props: any) => {
  useEffect(() => {
    setShow(true);
  }, []);

  const [show, setShow] = useState(false);

  const transitions = useTransition(show, {
    from: { opacity: 0, color: "red" },
    enter: { opacity: 1, color: "blue" },
    leave: { opacity: 0, color: "green" },
  });

  return (
    <>
      {props.children}
      {transitions(
        (styles, item): any =>
          item && (
            <animated.div style={styles}>
              <div className="fixed right-5 w-44 h-44 bg-black top-12 text-center flex items-center justify-center text-2xl">
                Catalog layout
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default CatalogLayout;
