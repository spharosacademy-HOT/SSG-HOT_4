import React from 'react';
import TotalReviewCard from './TotalReviewCard';

function TotalReview() {
    return ( 
        <>
            <div className='total-review'>
                <div className='total-review-header'>
                    <div className='review-title'>
                        전체 리뷰
                    </div>
                    <div className='review-more'>
                        더보기(1,384)
                    </div>
                </div>
                {/* map으로 풀기 */}
                <TotalReviewCard/>
                <TotalReviewCard/>
            </div>
        </>
     );
}

export default TotalReview;