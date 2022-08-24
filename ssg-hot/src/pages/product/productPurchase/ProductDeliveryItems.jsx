import React from 'react'
import purchaseDatas from '../../../datas/js/purchaseDatas';
import ProductDeliveryItem from './ProductDeliveryItem';

function ProductDeliveryItems() {
    return ( 
        <>
            <div className='purchase-card-box product-delivery-items'>
                <div className='purchase-title-style'>택배배송</div>
                
                {
                    purchaseDatas && purchaseDatas.map(item =>(
                        <ProductDeliveryItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </>
     );
}

export default ProductDeliveryItems;