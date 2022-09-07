import React from 'react';
import { useRecoilValue } from 'recoil';
import { originPriceState, totalPriceState } from '../../../store/atom/purchaseState';
import { addCommas } from '../../../store/utils/useful-funtions'

function ProductDiscountOffer() {
    const payPrice = useRecoilValue(totalPriceState)
    const originPrice = useRecoilValue(originPriceState)
    return ( 
        <>
            <div className='purchase-card-box product-discount-offer'>
                <div className='purchase-title-style'>할인혜택</div>
                <div>
                    <div>
                        <p>상품할인</p>
                        <p>- {addCommas(originPrice - payPrice)}원</p>
                    </div>
                    <div>
                        <p>결제할인(쿠폰 0장 보유)</p>
                        <p>- 0원</p>
                    </div>
                    <div>
                        <p>카드 첫결제 혜택</p>
                        <p>- 0원</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
     );
}

export default ProductDiscountOffer;