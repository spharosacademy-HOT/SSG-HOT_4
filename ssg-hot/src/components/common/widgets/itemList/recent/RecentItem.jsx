import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postLike } from "../../../../../store/apis/like";
import {
  deleteRecent,
  getRecent,
  postRecentCart,
} from "../../../../../store/apis/recent";
import CartButton from "../../button/CartButton";
import LikeButton from "../../button/LikeButton";
import ItemDesc from "./ItemDesc";
import ItemImg from "./ItemImg";
export default function RecentItem({
  item,
  isTrue,
  setIsTrue,
  dataId,
  setDataId,
  setModalData,
  setRcData,
}) {
  const [isLike, setIsLike] = useState(item.isWished);
  const productId = item.product.id;

  const handleCartAdd = () => {
    postRecentCart(productId).then((res) => {
      console.log(res, "장바구니 담기");
      alert(res.Message);
      // setIsTrue(true);
      // setModalData(res.Message);
    });
  };

  const handleRecent = () => {
    const id = item.id;
    deleteRecent(productId, id).then((res) => {
      console.log(res);
      getRecent().then((res) => {
        setRcData(res.content);
      });
    });
  };
  const changeLike = () => {
    postLike(productId).then((res) => {
      console.log(res);
    });
  };

  return (
    <li key={item.id} className="recentList">
      <div className="recentDesc">
        <button onClick={handleRecent}>x</button>
        <Link to={`/product/${item.id}`}>
          <ItemDesc
            id={item.product.id}
            name={item.product.brandName}
            info={item.product.detail}
            price={item.product.discountPrice}
          />
          <ItemImg imgUrl={item.product.titleImgUrl} />
        </Link>
      </div>
      <div className="recentBtn">
        <CartButton handleCartAdd={handleCartAdd} />
        <div onClick={changeLike}>
          <LikeButton isLike={isLike} setIsLike={setIsLike} />
        </div>
      </div>
    </li>
  );
}
