import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { categoryNaviState } from "../../components/state/atomState";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import main0 from "../../public/image/contact.jpg";

type Inputs = {
  email: string;
  title: string;
  textArea: string;
};
const Contact = () => {
  const [mainImgHeight, setMainImgHeight] = useState(1082);
  const [mainImgWidth, setMainImgWidth] = useState(1920);
  const [show, setShow] = useRecoilState(categoryNaviState);

  useEffect(() => {
    setShow(false);
  }, [setShow]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMainImgHeight(window.innerHeight);
      setMainImgWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    setMainImgHeight(window.innerHeight);
    setMainImgWidth(window.innerWidth);
  }, [setMainImgHeight, setMainImgWidth]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send(
        "service_6lratd9",
        "template_8wh6qfp",
        data,
        "user_iLCRL9p3HZ7CUrsE7niKg"
      )
      .then(
        (result) => {
          toast.success("Success");
          reset();
        },
        (error) => {
          toast.error("Failed");
        }
      );
  };

  return (
    <>
      <Head>
        <title>CONTACT | SAMWOO MANUFACTURING</title>
        <meta
          name="description"
          content="Contact Page all patrs for guitar korea SAMWOO MANUFACTURING."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="QbfEjI-CV9tEUfIi3AUzHr0l72sFMkKeDnSgQeNcfwE"
        />
      </Head>

      <div className="contact-wrapper main-bg">
        <div
          className="absolute w-auto h-auto top-0 left-0 -z10"
          style={{ width: mainImgWidth, height: mainImgHeight }}
        >
          <Image
            src={main0}
            alt={"main img"}
            priority={true}
            layout={"fill"}
            objectFit={"cover"}
          ></Image>
        </div>
        <div className="bg-slate-800 text-gray-100 px-10 py-14 h-auto w-auto z-20 rounded-lg relative">
          <div className="text-white font-bold text-3xl w-full text-center">
            CONTACT
          </div>
          <div className="w-full border-t-2 border-white my-3"></div>
          <div className="contact-item text-base lg:text-lg font-semibold mb-3">
            If you have any questions about the product, please submit the form
            below. We will reply as soon as possible.
            <br></br>You can contact our e-mail address directly.<br></br>
            <a href="mailto:samwoo@swmusic.co.kr">samwoo@swmusic.co.kr</a>
          </div>
          <div className="contact-item relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Email Address"
                type={"email"}
                className="block text-black my-2 px-2 w-full caret-cyan-600 border-2  rounded shadow-inner focus:border-cyan-700 focus:outline-none "
                {...register("email")}
              ></input>
              <input
                placeholder="Title"
                type={"text"}
                className="block text-black my-2 px-2 w-full caret-cyan-600 border-2  rounded shadow-inner focus:border-cyan-700 focus:outline-none"
                {...register("title", { required: true })}
              ></input>
              {errors.title && (
                <span className="text-white"> * This field is required</span>
              )}
              <textarea
                placeholder="Text"
                className="block text-black my-2 px-2 h-48 w-full caret-cyan-600 border-2  rounded shadow-inner focus:border-cyan-700 focus:outline-none resize-none"
                {...register("textArea")}
              ></textarea>
              <input
                type="submit"
                className="bg-cyan-600 text-xl text-white px-2 py-1 rounded hover:bg-cyan-800 cursor-pointer absolute right-0 -bottom-10"
                value={"SEND"}
              />
            </form>
          </div>
        </div>
        <ToastContainer
          className="text-black"
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default Contact;
