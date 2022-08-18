import React from "react";
import SignUpSns from "./SignUpSns";
import SignUpInput from "./SignUpInput";
import CommonHeader from "../../../components/layout/header/CommonHeader";
export default function SignUp() {
  return (
    <>
      <CommonHeader title="회원가입" />
      <SignUpInput />
      <SignUpSns />
    </>
  );
}
