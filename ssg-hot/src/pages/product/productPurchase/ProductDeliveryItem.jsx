import React from 'react'

function ProductDeliveryItem({item}) {
    return ( 
        <>
            <div className='product-delivery-item'>
                <div className='delivery-item-image'><img src={item.imgUrl} alt="" /></div>
                <div>
                    <div>{item.desc.comName} - {item.desc.brandName}</div>
                    <div className='purchase-info-box'>
                        {item.desc.name}{item.desc.info}
                    </div>  
                    <div>
                        <div>
                            <div className='reguler-price'>{item.desc.oldPrice}원</div>
                            <div className='pay-price'>{item.desc.newPrice}원</div>
                        </div>
                        <div className='product-qty'>수량 1개</div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ProductDeliveryItem;