import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteRecent, getRecent } from "../../../../../store/apis/recent";
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
  const [isLike, setIsLike] = useState(false);
  const handleCartAdd = () => {
    //axios//item.productid.

    setIsTrue(true);
    if (isTrue) {
      setModalData("이미 있어요");
    } else {
      setModalData("많아요");
    }
  };
  const handleRecent = () => {
    const userId = sessionStorage.getItem("id");
    const id = item.id;
    const recentDta = {
      product: {
        id: item.product.id,
      },
      user: {
        id: userId,
      },
    };
    console.log(id, recentDta, "dufidsjfklsdj");
    deleteRecent(recentDta, id).then((res) => {
      console.log(res);
      getRecent().then((res) => {
        setRcData(res);
      });
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
        <LikeButton isLike={isLike} setIsLike={setIsLike} />
      </div>
    </li>
  );
}
