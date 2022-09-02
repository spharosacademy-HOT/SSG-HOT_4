import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { purchaseState } from '../../../store/atom/purchaseState';
// import purchaseDatas from '../../../datas/js/purchaseDatas';
import ProductDeliveryItem from './ProductDeliveryItem';

function ProductDeliveryItems() {
    const purchaseDatas = useRecoilValue(purchaseState)
    return ( 
        <>
            <div className='purchase-card-box product-delivery-items'>
                <div className='purchase-title-style'>택배배송</div>
                
                {
                    purchaseDatas && purchaseDatas.map(item =>(
                        <ProductDeliveryItem key={item.stockId} item={item}/>
                    ))
                }
            </div>
        </>
     );
}

export default ProductDeliveryItems;