import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { categoryNaviState } from "../../components/state/atomState";
import { useForm, SubmitHandler } from "react-hook-form";

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
  };

  return (
    <div className="flex flex-col justify-center items-center py-16 h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email Address"
          type={"email"}
          className="block my-2 border-2 border-gray-300 px-2 w-48"
          {...register("email")}
        ></input>
        <input
          placeholder="Title"
          type={"text"}
          className="block my-2 border-2 border-gray-300 px-2 w-48"
          {...register("title", { required: true })}
        ></input>
        {errors.title && <span>This field is required</span>}
        <textarea
          placeholder="Text"
          className="block my-2 border-2 border-gray-300 px-2 h-48 w-48 resize-none"
          {...register("textArea")}
        ></textarea>
        <input
          type="submit"
          className="bg-blue-400 text-white px-2 py-1 rounded hover:bg-blue-500"
          value={"SEND"}
        />
      </form>
    </div>
  );
};

export default Contact;
