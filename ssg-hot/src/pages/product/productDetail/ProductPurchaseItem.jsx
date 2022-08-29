import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ProductPurchaseItem() {
    const[productQty,setProductQty] = useState(1);
    const handleProductPlus = () =>{
        setProductQty(productQty + 1)
    }
    const handleProductMinus = () =>{
        setProductQty(productQty - 1)
    }
    return ( 
        <>
            <div className='product-qty'>
                <div>
                    <div>아이보리</div>
                    <div><FontAwesomeIcon icon={faXmark}/></div>
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
                        37,628원
                    </div>
                </div>
            </div>
        </>
     );
}

export default ProductPurchaseItem;