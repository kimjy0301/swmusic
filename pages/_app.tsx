import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { animated, Transition } from "react-spring";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading, setIsLoading]);

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
    <>
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center text-3xl">
          Loading...first-letter:
        </div>
      ) : (
        <BaseLayout>
          <Layout>
            <Transition
              items={items}
              keys={(items: any) => items.id}
              from={{ opacity: 0 }}
              initial={{ opacity: 0 }}
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
        </BaseLayout>
      )}
    </>
  );
}

export default MyApp;
