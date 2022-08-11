import React from 'react';

function ProductDetailImgCard({item}) {
    return ( 
        <>
            <div className='product-detail-img-card'>
                <img src={item.imgUrl} alt="" />
            </div>
        </>
     );
}

export default ProductDetailImgCard;