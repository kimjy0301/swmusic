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

  return (
    <>
      <Head>
        <title>HOME | SAMWOO MANUFACTURING</title>
        <meta
          name="keywords"
          content="guitar parts,korea guitar parts,guitar"
        />
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
        <MainPage2 main={true}></MainPage2>
      </div>
    </>
  );
};

export default Home;
