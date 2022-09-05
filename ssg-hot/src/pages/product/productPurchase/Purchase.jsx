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
        amountPaid : totalDiscountPrice,
        orderTotal:10000,
        deliveryPay:3000,
    
        deliveryName:"확인용",
        deliveryPhone:"확인용",
        deliveryAddress:"확인용",
        deliveryZipcode:123456,
        deliveryInfo: "확인용",
        envoice:"확인용",
        paymentOption: "카드",
        couponId:1,
        orderItems:[
            {
            stockId:5544,
            stockCount:2,
            stockPrice:20000
            },
            {
            stockId:5544,
            stockCount:2,
            stockPrice:20000
            }
        ]
    }
    const handlePurchase = () =>{
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