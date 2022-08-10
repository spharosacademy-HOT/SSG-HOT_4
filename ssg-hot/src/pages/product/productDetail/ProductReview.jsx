import React from 'react'
import PhotoReview from './productReview/PhotoReview';
import RecommendReview from './productReview/RecommendReview';
import TotalReview from './productReview/TotalReview';

function ProductReiew() {
    return ( 
        <>
            <div>
                <div>
                    <div>별점</div>
                    <div>4.9/5</div>
                </div>
                <div>
                    1,385건 리뷰
                </div>
            </div>
            <RecommendReview/>
            <PhotoReview/>
            <TotalReview/>
        </>
     );
}

export default ProductReiew;