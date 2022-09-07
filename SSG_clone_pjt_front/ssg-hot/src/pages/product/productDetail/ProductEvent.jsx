import React from 'react'
import ProductEventList from './ProductEventList';

function ProductEvent() {
    return ( 
        <>
            <div className='product-event-detail'>
                <ul>
                    <li>
                        <div className='product-event-title'>
                            카드혜택가
                        </div>
                        <div className='is-important-info'>
                            2,558원~
                        </div>
                    </li>
                    <li>
                        <div className='product-event-title'>
                            무이자 할부
                        </div>
                        <div>
                            카드사별 무이자 혜택
                        </div>
                    </li>
                    <li>
                        <div className='product-event-title'>
                            이벤트
                        </div>
                        <div>
                            <ProductEventList/>
                        </div>
                    </li>
                    <li>
                        <div className='product-event-title'>
                            배송정보
                        </div>
                        <div>
                            <p className='is-important-info'>택배배송 CJ대한통운</p>
                            <p>8/16(화)도착 예정</p>
                            <p>배송비 2,500원(21,000원 이상 무료)</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='product-gray-box'></div>
        </>
     );
}

export default ProductEvent;