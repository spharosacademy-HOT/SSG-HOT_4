import React from 'react';
import { useRecoilValue } from 'recoil';
import ProductAmountPaid from './ProductAmountPaid';
import ProductDeliveryAdress from './ProductDeliveryAdress';
import ProductDeliveryItems from './ProductDeliveryItems';
import ProductDiscountOffer from './ProductDiscountOffer';
import ProductMyInfo from './ProductMyInfo';
import ProductPaying from './ProductPaying';
import ProductPaymentMethod from './ProductPaymentMethod';
import ProductPoint from './ProductPoint';
import ProductShippingRequest from './ProductShippingRequest';
import { purchaseState, totalPriceState } from "../../../store/atom/purchaseState";
import { purchaseProduct } from '../../../store/apis/product';

function Purchase() {
    const totalDiscountPrice = useRecoilValue(totalPriceState)
    const purchaseProductData = useRecoilValue(purchaseState)
    const purchaseData = {
        amountPaid:purchaseProductData,
        orderTotal:10000,
        deliveryPay:3000,
    
        deliveryTaker:"배송지 이름",
        deliveryName:"배송지 이름",
        deliveryPhone:"배송지 전화번호",
        deliveryAddress:"배송지 주소",
        deliveryAddress2: "지번",
        deliveryZipcode:123456,
        deliveryInfo: "택배함에 넣어주세요",
        envoice:"송장번호",
        paymentOption: "카드",
        // couponId:1,
    
        orderInfo:"주문 시 결제수단으로 환불받기",
        orderName:"박찬흠",
        orderPhone:"01012341234",
        orderEmail:"33cks1423@naver.com",
        orderItems:[
            {
            stockId:4,
            stockCount:2,
            stockPrice:20000
            }
        ]
    }
    const handlePurchase = () =>{
        console.log(purchaseData)
        purchaseProduct(purchaseData)
        .then((res) =>{
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
    return ( 
        <>  
            <div className='purchase-background'>
                <ProductDeliveryAdress/>
                <ProductDiscountOffer/>
                <ProductPoint/>
                <ProductPaymentMethod/>
                <ProductAmountPaid totalDiscountPrice={totalDiscountPrice}/>
                <ProductPaying handlePurchase={handlePurchase}/>
                <ProductMyInfo/>
                <ProductShippingRequest/>
                <ProductDeliveryItems/>
            </div>
        </>
     );
}

export default Purchase;