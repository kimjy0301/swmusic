import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { animated, Transition } from "react-spring";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  console.log(router.pathname);

  const items = [
    {
      id: router.pathname,
      Component,
      pageProps,
    },
  ];

  return (
    <Layout>
      <Transition
        items={items}
        keys={(items: any) => items.id}
        from={{ opacity: 0, x: -500 }}
        initial={{ opacity: 0, x: -500 }}
        enter={{ opacity: 1, x: 0 }}
        leave={{ opacity: 0, x: 500, position: "absolute" }}
      >
        {(styles, { pageProps, Component }) => (
          <animated.div style={{ ...styles, width: "100%" }}>
            <Component {...pageProps} />
          </animated.div>
        )}
      </Transition>
    </Layout>
  );
}

export default MyApp;
