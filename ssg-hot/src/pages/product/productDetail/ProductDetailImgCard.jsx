import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

function ProductDetailImgCard({item}) {
    console.log(item)
    const [subImg, setSubImg] = useState();
    useEffect(() =>{
        axios
        .get(`http://10.10.10.84:8080/ssghot/product/subimg/${item}`)
        .then((Response) =>{
            setSubImg(Response.data)
        })
    },[])
    return (
        <>
            <div className='product-detail-img-card'>
                <img src={subImg && subImg.subImgUrl} alt="" />
            </div>
        </>
     );
}

export default ProductDetailImgCard;