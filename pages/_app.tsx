import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { animated, Transition } from "react-spring";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();
  const items = [
    {
      id: router.pathname,
      Component,
      pageProps,
    },
  ];

  return getLayout(
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
