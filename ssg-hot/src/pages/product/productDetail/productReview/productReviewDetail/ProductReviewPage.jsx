import React from 'react';
import ProductReviewInfo from './ProductReviewInfo';
import ProductReviewTitle from './ProductReviewTitle';
import ProductReviewList from './ProductReviewList';
import ProductPurchaseBar from '../../ProductPurchaseBar';

function ProductReviewPage() {
    return ( 
        <>
            <div className='product-review-page'>
                <ProductReviewTitle/>
                <ProductReviewInfo/>
                <ProductReviewList/>
                <ProductPurchaseBar/>
            </div>

        </>
     );
}

export default ProductReviewPage;