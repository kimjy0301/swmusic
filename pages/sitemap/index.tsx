import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>SITEMAP|SAMWOO MANUFACTURING CO., LTD.</title>
        <meta
          name="description"
          content="SITEMAP Page all patrs for guitar korea SAMWOO MANUFACTURING."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="QbfEjI-CV9tEUfIi3AUzHr0l72sFMkKeDnSgQeNcfwE"
        />
      </Head>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex h-full justify-between items-center">
          <Link passHref href="/">
            <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150 mx-5">
              Home
            </div>
          </Link>
          <Link passHref href="/about">
            <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150 mx-5">
              ABOUT US
            </div>
          </Link>

          <Link passHref href="/catalog/2/1">
            <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150 mx-5">
              2022 New Items
            </div>
          </Link>
          <Link passHref href="/catalog/1/0">
            <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150 mx-5">
              Main Catalog
            </div>
          </Link>

          <Link passHref href="/contact">
            <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150 mx-5">
              CONTACT US
            </div>
          </Link>
          <Link passHref href="/namm">
            <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150 mx-5">
              Namm
            </div>
          </Link>
          <Link passHref href="/messe">
            <div className="cursor-pointer select-none my-2 hover:text-cyan-600 transition-all duration-150 mx-5">
              Messe
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
