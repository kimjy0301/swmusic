import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { categoryNaviState } from "../../components/state/atomState";

const Contact = () => {
  const [show, setShow] = useRecoilState(categoryNaviState);

  useEffect(() => {
    setShow(false);
  }, [setShow]);
  return (
    <div className="flex flex-col justify-center items-center py-16 h-screen">
      {`show=${show}`}
    </div>
  );
};

export default Contact;
