import React from 'react'
import PhoteReviewCard from './PhotoReviewCard';
import reviewPhotoData from '../../../../datas/js/reviewPhotoData';

function PhotoReview({item}) {
    return ( 
        <>
            {
                item &&
                <>
                    <img src={item.imgUrl} alt="" />
                </>
            }

        </>
     );
}

export default PhotoReview;