import React from 'react'

function ProductMyInfo() {
    return ( 
        <>
            <div className='purchase-card-box product-my-info'>
                <div className='title-line'>
                    <div className='purchase-title-style'>주문자 정보</div>
                    <div className='purchase-change-button'><button>변경</button></div>
                </div>
                <div>
                    <ul>
                        <li>
                            <div>주문자명</div>
                            <div>박수아</div>
                        </li>
                        <li>
                            <div>연락처</div>
                            <div>010-5771-2714</div>
                        </li>
                        <li>
                            <div>이메일</div>
                            <div>tndk4997@naver.com</div>
                        </li>
                        <li>
                            <div>품절시 환불</div>
                            <div>주문 시 결제수단으로 환불받기</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default ProductMyInfo;