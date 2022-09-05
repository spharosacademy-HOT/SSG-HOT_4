import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LikeButton from "../../components/common/widgets/button/LikeButton";
import { getLike, postLike } from "../../store/apis/like";
import { addCommas } from "../../store/utils/useful-funtions"

function ProductCard({ item, isWished }) {
  let navigate = useNavigate();
  const [isLike, setIsLike] = useState(isWished);
  const addWish = (id, e) => {
    e.preventDefault();
    // console.log(id);
    if (localStorage.getItem("token")) {
      // postLike(id).then((res) => console.log(res, "좋아요요청"));
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="product-thumbnail-card" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            zIndex: "30",
            left: "80%",
            top: "28%",
          }}
          onClick={(e) => addWish(item.id, e)}
        >
          <LikeButton isLike={isLike} setIsLike={setIsLike} />
        </div>
        <Link to={`/product/${item.id}`}>
          <div className="product-image">
            <img src={item.titleImgUrl} alt="" />
            <div></div>
          </div>
          <div className="product-info">
            <div className="product-name">{item.name}</div>
            <div className="product-text">{item.detail}</div>

            <div className="price">
              <div>
                <div>{addCommas(item.discountPrice)}원</div>
                <div>{item.discountRate}%</div>
              </div>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>{item.star}</div>
              <div>{item.viewCount}건</div>
            </div>
            <div className="product-event">
              {item.shippingFee ? <></> : <div>무료배송</div>}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
