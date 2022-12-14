import React from 'react';

function ProductPaying({handlePurchase}) {
    

    return ( 
        <>
            <div className='purchase-card-box product-paying'>
                <div>주문정보 및 서비스 약관에 동의합니다</div>
                <div onClick={handlePurchase} className='pay-button'>결제하기</div>
            </div>
        </>
     );
}

export default ProductPaying;