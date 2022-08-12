import React from 'react';

function ProductMainImg({productDatas}) {
    return ( 
        <>
            <div className='product-main-image'>
                <img src={productDatas && productDatas} alt="" />
            </div>
        </>
     );
}

export default ProductMainImg;