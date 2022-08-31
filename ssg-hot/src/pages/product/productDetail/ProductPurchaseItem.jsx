import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ProductPurchaseItem({purchase, setDeleteId}) {
    const[productQty,setProductQty] = useState(1);
    const handleProductPlus = () =>{
        setProductQty(productQty + 1)
    }
    const handleProductMinus = () =>{
        setProductQty(productQty - 1)
    }
    const handleDelete = () =>{
        setDeleteId(purchase.stockId)
    }

    console.log('구매할 목록',purchase)
    return ( 
        <>
            <div className='product-qty'>
                <div>
                    <div>{purchase.productName}:색상:{purchase.optionFirst.name},사이즈:{purchase.optionSecond.name}(남은수량:{purchase.qty})</div>
                    <div><FontAwesomeIcon icon={faXmark} onClick={handleDelete}/></div>
                </div>
                <div>
                    <div>
                        <div className='num-changer'
                            onClick={handleProductMinus}>
                            -
                        </div>
                        <div>
                            {productQty}
                        </div>
                        <div className='num-changer'
                            onClick={handleProductPlus}>
                            +
                        </div>
                    </div>
                    <div>
                        {purchase.discountPrice}원
                    </div>
                </div>
            </div>
        </>
     );
}

export default ProductPurchaseItem;