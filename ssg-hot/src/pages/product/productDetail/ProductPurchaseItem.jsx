import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from 'recoil';
import { totalPriceState } from '../../../store/atom/purchaseState';

function ProductPurchaseItem({purchase, setDeleteId}) {
    const[productQty,setProductQty] = useState(1);
    const[totalPrice,setTotalPrice] = useRecoilState(totalPriceState) 
    const handleDelete = () =>{
        setDeleteId(purchase.stockId)
        setTotalPrice(totalPrice - (purchase.discountPrice * productQty))
    }
    const handleCount = (num) => {
        const newProduct = productQty + num
        if (newProduct > purchase.qty) {
            alert(`최대 구매 수량은 ${purchase.qty}개 입니다.`)
            return
        }
        if (newProduct < 1){
            alert('1회 최소 구매 가능한 수량은 1개입니다.')
            return
        }
        setProductQty(newProduct)
        setTotalPrice(totalPrice + (purchase.discountPrice * num))
    }
    console.log('ddd')
    console.log(purchase.discountPrice * productQty)
    console.log(totalPrice)

    return ( 
        <>
            <div className='product-qty'>
                
                <div>
                    <div>{purchase.productName}:색상:{purchase.optionFirst.name},사이즈:{purchase.optionSecond.name}(남은수량:{purchase.qty})</div>
                    <div><FontAwesomeIcon icon={faXmark} onClick={handleDelete}/></div>
                </div>
                <div>
                    <div>
                        <div className='num-changer'>
                            <button
                                type="button"
                                className="minusBtn"
                                onClick={() => handleCount(-1)}
                                >
                                <i className="iconBtn minusBtnIcon"></i>
                            </button>
                        </div>
                        <div>
                            {productQty}
                            
                        </div>
                        <div className='num-changer'>
                            <button
                                type="button"
                                className="plusBtn"
                                onClick={() => handleCount(1)}
                                >
                                <i className="iconBtn plusBtnIcon"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        {purchase.discountPrice * productQty}원
                    </div>
                </div>
                <div className="cartAmount">
            <div className="qtyValue">
                </div>
                    

                </div>
            </div>
        </>
     );
}

export default ProductPurchaseItem;