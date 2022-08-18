import React from 'react';
import { useState } from 'react';
import LikeButton from '../../../components/common/widgets/button/LikeButton';

function ProductPurchaseBar() {
    const [barState,setBarState] = useState(0)
    const handlePresent = () =>{
        setBarState(1)
    }
    const handlePurchase = () =>{
        setBarState(2)
    }
    return ( 
        <>
            <div className={barState === 0 ?
                'product-purchase-bar'
                // 'product-purchase-like'
                // 'product-purchase-buy'
                : barState === 1 ?
                'product-purchase-like'
                : 'product-purchase-buy'}>
                <ul>
                    <li className='product-choice'>
                        {/* 찜하기 컴포넌트 만들어서 넣기 */}
                        <div>
                            <LikeButton/>
                        </div>
                    </li>
                    <li className='product-present'>
                        <div onClick={handlePresent}>
                            선물하기
                        </div>
                    </li>
                    <li className='product-purchase'>
                        <div onClick={handlePurchase}>
                            구매하기
                        </div>
                    </li>
                    <li className='product-basket'>
                        <div>
                            장바구니
                        </div>
                    </li>
                    <li className='product-buy'>
                        <div>
                            바로구매
                        </div>
                    </li>
                </ul>
                {/* <div className='option-box'>
                    <div>
                        닫기
                    </div>
                    <div>

                    </div>
                    <div>
                        총 합계 0 원
                    </div>
                </div> */}
            </div>
        </>
     );
}
export default ProductPurchaseBar;