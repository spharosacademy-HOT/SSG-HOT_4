import React from "react";
import PhotoReview from "./productReview/PhotoReview";

import TotalReviewCard from "./productReview/TotalReviewCard";

function ProductReiew({ reviewDatas }) {
  return (
    <>
      <div className="product-review-box">
        <div className="product-consumer-review-title is-important-info review-box-contain">
          고객리뷰
          <hr />
        </div>
        {reviewDatas && reviewDatas.length > 0 ? (
          <>
            <div className="is-important-info review-box-contain">
              <div>별점</div>
              <div>4.9/5</div>
            </div>
            <div className="is-important-info product-review-cnt review-box-contain">
              {reviewDatas.length}건 리뷰
            </div>
            <div className="total-review">
              <div className="total-review-header">
                <div className="review-title">포토&동영상 리뷰</div>
                <div className="review-more">더보기({reviewDatas.length})</div>
              </div>
              <div className="review-image-list">
                {reviewDatas &&
                  reviewDatas
                    .map((item) => <PhotoReview item={item} key={item.id} />)
                    .slice(0, 8)}
              </div>
            </div>
            <PhotoReview />
            <div className="total-review">
              <div className="total-review-header">
                <div className="review-title">전체 리뷰</div>
                <div className="review-more">더보기({reviewDatas.length})</div>
              </div>
              {/* map으로 풀기 */}
              {reviewDatas &&
                reviewDatas
                  .map((item) => <TotalReviewCard item={item} key={item.id} />)
                  .slice(0, 4)}
            </div>
          </>
        ) : (
          <>등록된 리뷰가 없습니다</>
        )}
      </div>
    </>
  );
}

export default ProductReiew;
