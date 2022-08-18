import React from 'react'
import cateDatas from '../../../../../datas/js/cateDatas';
import ProductReviewCard from './ProductReviewCard';

function ProductReviewList() {
    return ( 
        <>
            {
                cateDatas && cateDatas.map(item=>(
                    <ProductReviewCard key={item.id}/>
                ))   
            }
            
        </>
     );
}

export default ProductReviewList;