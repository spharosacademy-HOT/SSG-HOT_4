import React from 'react'

function ProductDeliveryItem({item}) {
    return ( 
        <>
            <div className='product-delivery-item'>
                <div className='delivery-item-image'><img src={item.titleImgUrl} alt="" /></div>
                <div>
                    <div></div>
                    <div className='purchase-info-box'>
                        {item.productName}
                    </div>
                    <div>
                        옵션 : {item.optionFirst.name} {item.optionSecond.name}
                    </div>
                    <div>
                        <div>
                            <div className='reguler-price'>{item.discountPrice * item.count}원</div>
                            <div className='pay-price'>{item.discountPrice * item.count}원</div>
                        </div>
                        <div className='product-qty'>수량{item.count}개</div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ProductDeliveryItem;