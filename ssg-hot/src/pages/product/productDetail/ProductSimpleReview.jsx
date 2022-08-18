import React from 'react'
import { Link } from 'react-router-dom';

function ProductSimpleReview({itemNum}) {
    return ( 
        <>
            <div className='product-simple-review'>
                <div>별점</div>
                <Link to={`review/${itemNum}`}>
                    <div>75건 리뷰</div>
                </Link>
            </div>
            <hr />
        </>
     );
}

export default ProductSimpleReview;