import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LikeButton from "../../components/common/widgets/button/LikeButton";
import { getLike, postLike } from "../../store/apis/like";
import * as Api from "../../store/apis/address";
function ProductCard({ item }) {
  const [isLike, setIsLike] = useState();

  const addWish = (id, e) => {
    e.preventDefault();
    console.log(id);
    postLike(id).then((res) => console.log(res, "좋아요요청"));
  };
  // const getAxiosLike = async () => {
  //   try {
  //     const getData=await Api.get(`/wish/user`)
  //     console.log(getData)
  //   } catch (e){
  //     console.log(e)
  //   }
  // }
  useEffect(() => {
    getLike()
      .then((res) => {
        console.log(res.data, "좋아요가져오기");
        if (res.data !== null) {
          res.data.map((like) => {
            if (like.product.id == item.id) {
              console.log(like.product.id, "dsfsjjfklsjdklfjlk");
              setIsLike(true);
            }
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
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
                <div>{item.discountPrice}원</div>
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
              <div>해외직구</div>
              <div>무료배송</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
