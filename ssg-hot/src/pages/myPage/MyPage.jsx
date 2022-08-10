import React from "react";
import MyPageBenefit from "./MyPageBenefit";
import MyPageOrder from "./MyPageOrder";
import MyPageTop from "./MyPageTop";
import MyPageUser from "./MyPageUser";
import MyPageQuick from "./MyPageQuick";
import ImageSlider from "./ImageSlider";
import MyPageLink from "./MyPageLink";
export default function MyPage() {
  return (
    <>
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
