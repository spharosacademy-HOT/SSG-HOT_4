import React from 'react'
import { getUserDetail } from '../../../store/apis/user';
import { useState } from 'react';
import { useEffect } from 'react';

function ProductMyInfo() {
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        getUserDetail()
        .then((res)=>{
            setUserData(res)
        })
    },[])
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
                            <div>{userData.name}</div>
                        </li>
                        <li>
                            <div>연락처</div>
                            <div>{userData.phone}</div>
                        </li>
                        <li>
                            <div>이메일</div>
                            <div>{userData.email}</div>
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