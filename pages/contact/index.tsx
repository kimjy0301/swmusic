import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { categoryNaviState } from "../../components/state/atomState";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Head from "next/head";

type Inputs = {
  email: string;
  title: string;
  textArea: string;
};
const Contact = () => {
  const [show, setShow] = useRecoilState(categoryNaviState);

  useEffect(() => {
    setShow(false);
  }, [setShow]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    emailjs
      .send(
        "service_0qov1rn",
        "template_8wh6qfp",
        data,
        "user_iLCRL9p3HZ7CUrsE7niKg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>CONTACT|SAMWOO MANUFACTURING CO., LTD.</title>
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
        <div className="contact-item text-lg font-semibold text-white">
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
              className="block my-2 px-2 w-full caret-cyan-600 border-2  rounded shadow-inner focus:border-cyan-700 focus:outline-none "
              {...register("email")}
            ></input>
            <input
              placeholder="Title"
              type={"text"}
              className="block my-2 px-2 w-full caret-cyan-600 border-2  rounded shadow-inner focus:border-cyan-700 focus:outline-none"
              {...register("title", { required: true })}
            ></input>
            {errors.title && <span>This field is required</span>}
            <textarea
              placeholder="Text"
              className="block my-2 px-2 h-48 w-full caret-cyan-600 border-2  rounded shadow-inner focus:border-cyan-700 focus:outline-none resize-none"
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
    </>
  );
};

export default Contact;
