import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { categoryNaviState, countState } from "../components/state/atomState";
import MainPage from "../components/MainPage";
import { useEffect } from "react";

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
        <MainPage></MainPage>
      </div>
    </>
  );
};

export default Home;
