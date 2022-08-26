import React from 'react'
import PhotoReview from './productReview/PhotoReview';
// import RecommendReview from './productReview/RecommendReview';
import TotalReview from './productReview/TotalReview';

function ProductReiew({reviewDatas}) {
    return ( 
        <>
            <div className='product-review-box'>
                <div className='product-consumer-review-title is-important-info review-box-contain'>
                    고객리뷰
                    <hr />
                </div>
                {
                    reviewDatas && reviewDatas.length > 0 ?
                    <>
                        <div className='is-important-info review-box-contain'>
                            <div>별점</div>
                            <div>4.9/5</div>
                        </div>
                        <div className='is-important-info product-review-cnt review-box-contain'>
                            1,385건 리뷰
                        </div>
                        <PhotoReview/>
                        <TotalReview/>
                    </>
                    :
                    <>
                       등록된 리뷰가 없습니다 
                    </>
                }
                
            </div>

            
        </>
     );
}

export default ProductReiew;