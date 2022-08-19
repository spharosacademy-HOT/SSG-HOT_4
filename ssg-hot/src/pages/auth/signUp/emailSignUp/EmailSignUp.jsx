import React from "react";
import CommonHeader from "../../../../components/layout/header/CommonHeader";
import EmailA from "./EmailA";
import EmailAd from "./EmailAd";
import Emailform from "./Emailform";
import EmailInfor from "./EmailInfor";

function EmailSignUp() {
  return (
    <>
      <CommonHeader title="간편회원가입" />
      <Emailform />
      <EmailA />
      <EmailInfor />
      <EmailAd />
    </>
  );
}

export default EmailSignUp;
