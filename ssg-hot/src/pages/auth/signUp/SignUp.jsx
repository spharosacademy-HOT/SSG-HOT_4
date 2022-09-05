import React from "react";
import SignUpSns from "./SignUpSns";
import SignUpInput from "./SignUpInput";
import CommonHeader from "../../../components/layout/header/CommonHeader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <CommonHeader title="회원가입" />
      <SignUpInput />
      <SignUpSns />
    </>
  );
}
