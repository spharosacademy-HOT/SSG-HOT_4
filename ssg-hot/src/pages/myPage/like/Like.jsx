import React from "react";
import CommonHeader from "../../../components/layout/header/CommonHeader.jsx";
import LikeContnent from "./LikeContent.jsx";
import LikeHeader from "./LikeHeader.jsx";
import LikeProduct from "./LikeProduct.jsx";

function Like() {
  return (
    <>
      <CommonHeader title="좋아요" />

      <LikeHeader />

      <LikeContnent />
      <LikeProduct />
    </>
  );
}

export default Like;
