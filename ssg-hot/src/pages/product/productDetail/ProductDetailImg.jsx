import React, { useState } from 'react'
import productImageCard from '../../../datas/js/productImageCard';
import ProductDetailImgCard from './ProductDetailImgCard';

function ProductDetailImg({imgNum}) {
    const [isOpen, setIsOpen] = useState(false)
    const ImageFold = () =>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return ( 
        <>
            <div className={isOpen ? 'open-product-image' : 'close-product-image'}>
                {
                    imgNum && imgNum.map(item => (
                        <ProductDetailImgCard item={item.id} key={item.id}/>
                    ))
                }
            </div>

            <div className={isOpen ? 'non-shadow' : 'i-have-shadow'}>
                <button onClick={ImageFold}>
                    상세정보 접기
                </button>
                <button onClick={ImageFold}>
                    상세정보 펼쳐보기
                </button>
            </div>
            <div className='product-gray-box'>
            </div>
        </>
     );
}

export default ProductDetailImg;