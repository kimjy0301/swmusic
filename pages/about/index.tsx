import Head from "next/head";
import MainPage2 from "../../components/MainPage2";

const Index = () => {
  return (
    <>
      <Head>
        <title>ABOUT | SAMWOO MANUFACTURING</title>
        <meta
          name="description"
          content="About Page all patrs for guitar korea SAMWOO MANUFACTURING."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="QbfEjI-CV9tEUfIi3AUzHr0l72sFMkKeDnSgQeNcfwE"
        />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <MainPage2 main={false}></MainPage2>
      </div>
    </>
  );
};

export default Index;
