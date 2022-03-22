import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { categoryNaviState, countState } from "../components/state/atomState";
import { useEffect, useState } from "react";
import MainPage2 from "../components/MainPage2";

interface catalog {
  id: number;
  name: string;
  created: string;
}

const Home: NextPage = ({ catalogs }: any) => {
  const [show, setShow] = useRecoilState(categoryNaviState);
  useEffect(() => {
    setShow(false);
  }, [setShow]);

  const [isIE, setIsIE] = useState(false);

  useEffect(() => {
    setIsIE(/MSIE|Trident/.test(window.navigator.userAgent));
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>HOME|SAMWOO MANUFACTURING CO., LTD.</title>
        <meta
          name="description"
          content="Home Page all patrs for guitar korea SAMWOO MANUFACTURING."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="QbfEjI-CV9tEUfIi3AUzHr0l72sFMkKeDnSgQeNcfwE"
        />
      </Head>
      <div className="flex flex-col justify-center items-center">
        {isIE && (
          <div>
            This site does not support IE11. Please use a modern browser such as
            Edge or Chrome.
          </div>
        )}
        <MainPage2 main={true}></MainPage2>
      </div>
    </>
  );
};

export default Home;
