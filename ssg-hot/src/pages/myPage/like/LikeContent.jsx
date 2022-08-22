import React from "react";

function LikeContnent() {
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
            상품 (0)
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
    </>
  );
}

export default LikeContnent;
