import React from 'react'
import PhoteReviewCard from './PhotoReviewCard';
import reviewPhotoData from '../../../../datas/js/reviewPhotoData';

function PhotoReview() {
    return ( 
        <>
            <div className='total-review'>
                <div className='total-review-header'>
                    <div className='review-title'>
                        포토&동영상 리뷰
                    </div>
                    <div className='review-more'>
                        더보기(1,384)
                    </div>
                </div>
                <div className='review-image-list'>
                    {/* 전체 리뷰를 돌면서 사진이 있는 리뷰 8개에서 첫번째 사진 값 가지고 오기 */}
                    {
                        reviewPhotoData && reviewPhotoData.map(item =>(
                            <PhoteReviewCard item={item} key={item.id} />
                        ))
                    }
                    
                </div>
            </div>

        </>
     );
}

export default PhotoReview;