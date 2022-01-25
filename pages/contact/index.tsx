import React from "react";
import { useRecoilState } from "recoil";
import {
  categoryNaviState,
  countState,
} from "../../components/state/atomState";

const Contact = () => {
  const [show, setShow] = useRecoilState(categoryNaviState);
  const [count, setCount] = useRecoilState(countState);
  setShow(false);
  return (
    <div className="flex flex-col justify-center items-center py-16 h-screen">
      {`show=${show}`}
      <h1>{count}</h1>

      <button
        onClick={(e) => {
          e.preventDefault;
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Contact;
