import React, { useState } from 'react'
import productImageCard from '../../../datas/js/productImageCard';
import ProductDetailImgCard from './ProductDetailImgCard';

function ProductDetailImg() {
    const [isOpen, setIsOpen] = useState(false)
    const ImageFold = () =>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return ( 
        <>
            <div className={isOpen ? 'open-product-image' : 'close-product-image'}>
                {
                    productImageCard && productImageCard.map(item => (
                        <ProductDetailImgCard item={item} key={item.id}/>
                    ))
                }
            </div>

            <div className={isOpen ? 'non-shadow' : 'i-have-shadow'}>
                <button onClick={ImageFold}>
                    상세정보 접기
                </button>
            </div>
            <div className='product-gray-bosx'>

            </div>
        </>
     );
}

export default ProductDetailImg;