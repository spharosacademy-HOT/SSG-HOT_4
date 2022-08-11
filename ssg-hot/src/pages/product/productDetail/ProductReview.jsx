import React from 'react'
import PhotoReview from './productReview/PhotoReview';
// import RecommendReview from './productReview/RecommendReview';
import TotalReview from './productReview/TotalReview';

function ProductReiew() {
    return ( 
        <>
            <div className='product-review-box'>
                <div className='product-consumer-review-title is-important-info'>
                    고객리뷰
                    <hr />
                </div>
                <div className='is-important-info'>
                    <div>별점</div>
                    <div>4.9/5</div>
                </div>
                <div className='is-important-info'>
                    1,385건 리뷰
                </div>
            </div>
            {/* <RecommendReview/> */}
            <PhotoReview/>
            <TotalReview/>
        </>
     );
}

export default ProductReiew;