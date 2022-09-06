import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserDetail } from '../../../store/apis/user';
import { getAddress } from '../../../store/apis/address';
import { useState } from 'react';
import { useEffect } from 'react';
import { totalPriceState } from '../../../store/atom/purchaseState';
import { useRecoilValue } from 'recoil';


function OrderComplete() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([])
    const [deliveryData,setDeliveryData] = useState([])
    const totalPrice = useRecoilValue(totalPriceState)

    useEffect(()=>{
        getUserDetail()
        .then((res)=>{
            setUserData(res)
        })
        getAddress()
        .then((res)=>{
            setDeliveryData(res.data.data[0])
        })
    },[])

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
                        {userData.name} / {userData.phone}
                    </div>
                    <div>
                        {deliveryData.city}
                    </div>
                </div>
                <div className='payment-amount'>
                    결제금액 : {totalPrice}원
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