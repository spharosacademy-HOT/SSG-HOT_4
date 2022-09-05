import React, { useEffect, useState } from "react";
import { getLike } from "../../../store/apis/like";
import ProductCard from "../../product/ProductCard";
import LikeProduct from "./LikeProduct";
function LikeContnent() {
  const [likeData, setLikeData] = useState([]);
  const [size, setSize] = useState(0);
  useEffect(() => {
    getLike().then((res) => {
      console.log(res, "좋아요 리스트 들고오기");
      setLikeData(res.data);
      setSize(res.size);
    });
  }, []);
  return (
    <>
      <div className="mylike_filter" role="radiogroup">
        <div className="mylike_filter_hscroll">
          <a
            href="/like"
            className="mylike_filter_btn clickable on "
            role="radio"
            aria-checked="true"
            data-react-tarea="좋아요|전체보기_유형탭|상품_클릭"
          >
            상품 ({size})
          </a>
          <a
            href="/like"
            className="mylike_filter_btn clickable "
            role="radio"
            aria-checked="false"
            data-react-tarea="좋아요|전체보기_유형탭|브랜드&스토어_클릭"
          >
            브랜드&amp;스토어 (0)
          </a>
          <a
            href="/like"
            className="mylike_filter_btn clickable "
            role="radio"
            aria-checked="false"
            data-react-tarea="좋아요|전체보기_유형탭|카테고리_클릭"
          >
            카테고리 (0)
          </a>
          <a
            href="/like"
            className="mylike_filter_btn clickable "
            role="radio"
            aria-checked="false"
            data-react-tarea="좋아요|전체보기_유형탭|콘텐츠_클릭"
          >
            콘텐츠 (0)
          </a>
          <a
            href="/like"
            className="mylike_filter_btn clickable "
            role="radio"
            aria-checked="false"
            data-react-tarea="좋아요|전체보기_유형탭|포스트_클릭"
          >
            포스트 (0)
          </a>
          <a
            href="/like"
            className="mylike_filter_btn clickable "
            role="radio"
            aria-checked="false"
            data-react-tarea="좋아요|전체보기_유형탭|트립_클릭"
          >
            여행 (0)
          </a>
        </div>
      </div>

      <div className="mylike_cmitem_wrap">
        <div className="product-list">
          {likeData &&
            likeData.map((item) => (
              <ProductCard item={item.product} key={item.id} isWished={true} />
            ))}
        </div>
        {likeData ? (
          ""
        ) : (
          <>
            <div className="mylike_cmitem_none">
              아직 좋아요한 상품이 없습니다.
            </div>
            <div className="mylike_cmitem_header">
              <h3 className="mylike_cmitem_tit">
                <span>이런 상품은 어떠세요?</span>
              </h3>
            </div>
            <LikeProduct />
          </>
        )}
      </div>
    </>
  );
}

export default LikeContnent;
