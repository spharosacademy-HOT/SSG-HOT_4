import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../../../../components/layout/header/CommonHeader";
import EmailA from "./EmailA";
import EmailAd from "./EmailAd";
import EmailInfor from "./EmailInfor";

function EmailSignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate(`/`);
    }
  });
  return (
    <>
      <CommonHeader title="간편회원가입" />

      <EmailInfor />
    </>
  );
}

export default EmailSignUp;
