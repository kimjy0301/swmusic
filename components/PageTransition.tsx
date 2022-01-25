import React, { useContext } from "react";
import { useTransition, animated } from "react-spring";

import { useRouter } from "next/router";

const Transition = ({ children, ...props }: any) => {
  const router = useRouter();
  console.log(router);
  const transitions = useTransition(router.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0,
    },
  });
  return (
    <>
      {transitions.map(({ item, props: style, key }) => {
        const { Component, props } =
          (item && item.components && item.components[item.pathname]) || {};

        return (
          <Page key={key} style={style}>
            {children(
              item ? { Component, pageProps: props && props.pageProps } : {}
            )}
          </Page>
        );
      })}
    </>
  );
};

export const PageTransition = ({ children, ...props }: any) => {
  return (
    <RouterContextProvider>
      <Transition {...props}>{children}</Transition>
    </RouterContextProvider>
  );
};
