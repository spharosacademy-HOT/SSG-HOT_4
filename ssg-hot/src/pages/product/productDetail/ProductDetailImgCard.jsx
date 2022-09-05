import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { baseURL } from "../../../store/apis/apiClient";

function ProductDetailImgCard({ item }) {
  const [subImg, setSubImg] = useState("");
  useEffect(() => {
    axios.get(baseURL + `/product/subimg/${item}`).then((Response) => {
      setSubImg(Response.data);
    });
  }, []);
  return (
    <>
      <div className="product-detail-img-card">
        <img src={subImg && subImg.subImgUrl} alt="" />
      </div>
    </>
  );
}

export default ProductDetailImgCard;
