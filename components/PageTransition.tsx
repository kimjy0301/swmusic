import { AppProps } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import { animated, useTransition } from "react-spring";

const PageTransition = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const items = [
    {
      id: router.pathname,
      Component,
      pageProps,
    },
  ];

  const transitions = useTransition(items, {
    keys: (items) => items.id,
    from: { opacity: 0, x: -1000 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 1000, position: "absolute" },
  });

  return transitions((styles, item) => (
    <animated.div style={{ ...styles, width: "100%" }}>
      <Component {...pageProps} />
    </animated.div>
  ));
};

export default PageTransition;
