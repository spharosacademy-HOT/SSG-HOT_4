import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyPageBenefit from "./MyPageBenefit";
import MyPageOrder from "./MyPageOrder";
import MyPageTop from "./MyPageTop";
import MyPageUser from "./MyPageUser";
import MyPageQuick from "./MyPageQuick";
import ImageSlider from "./ImageSlider";
import MyPageLink from "./MyPageLink";
import CommonHeader from "../../components/layout/header/CommonHeader";
export default function MyPage() {
  let navigate = useNavigate();
  const ACCESS_TOKEN = localStorage.getItem("token");
  useEffect(() => {
    if (ACCESS_TOKEN == null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {/* <CommonHeader title="MY SSG" /> */}
      <MyPageTop />
      <MyPageUser />
      <MyPageBenefit />
      <MyPageOrder />
      <MyPageQuick />
      <ImageSlider />
      <MyPageLink />
    </>
  );
}
