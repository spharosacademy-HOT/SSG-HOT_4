import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function OrderComplete() {
    const navigate = useNavigate();

    return (
        <>
            <div className='order-complete'>
                <div className="commonHeader bg-white">
                    <div className="backBtn">
                        <button type="button" onClick={() => navigate(-1)}></button>
                    </div>
                    <h2>주문 완료</h2>
                </div>
                <div className='older-complete-text'>
                    주문이 완료되었습니다
                </div>
                <div className='recipient-infomation'>
                    <div>
                        받는분 정보
                    </div>
                    <div>
                        박수아 / 010-5771-2714
                    </div>
                    <div>
                        주소입니다아아아아아아
                    </div>
                </div>
                <div className='payment-amount'>
                    결제금액 : 12,500원
                </div>
                <div className='shopping-button'>
                    <Link to="/">
                        <div>
                            계속 쇼핑하기
                        </div>
                    </Link>
                    <Link to='/order'>
                        <div>
                            주문상품 상세보기
                        </div>
                    </Link>
                </div>
            </div>
        </>
     );
}

export default OrderComplete;