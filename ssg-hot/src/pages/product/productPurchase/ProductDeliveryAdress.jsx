import React from 'react';

function ProductDeliveryAdress() {
    return ( 
        <>
            <div className='purchase-card-box product-delivery-adress'>
                <div>
                    <div className='purchase-title-style'>
                        배송지 박수아
                    </div>
                    <div className='purchase-change-button'>
                        <button>변경</button>
                    </div>
                </div>
                <div>
                    [49322] 부산광역시 사하구 승학로 131번길 29, 2동 201호 (당리동, 그린하트빌라)
                </div>
                <div className='user-phone-number'>
                    <div>
                        박수아/010-5771-2714
                    </div>
                    <div>
                        <input type="checkbox"/>안심번호 사용
                    </div>
                </div>
            </div>
        </>
     );
}

export default ProductDeliveryAdress;