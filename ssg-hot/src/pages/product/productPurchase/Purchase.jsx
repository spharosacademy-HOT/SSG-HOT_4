import React from 'react';
import ProductAmountPaid from './ProductAmountPaid';
import ProductDeliveryAdress from './ProductDeliveryAdress';
import ProductDeliveryItems from './ProductDeliveryItems';
import ProductDiscountOffer from './ProductDiscountOffer';
import ProductMyInfo from './ProductMyInfo';
import ProductPaying from './ProductPaying';
import ProductPaymentMethod from './ProductPaymentMethod';
import ProductPoint from './ProductPoint';
import ProductShippingRequest from './ProductShippingRequest';

function Purchase() {
    return ( 
        <>  
            <div className='purchase-background'>
                <ProductDeliveryAdress/>
                <ProductDiscountOffer/>
                <ProductPoint/>
                <ProductPaymentMethod/>
                <ProductAmountPaid/>
                <ProductPaying/>
                <ProductMyInfo/>
                <ProductShippingRequest/>
                <ProductDeliveryItems/>
            </div>
        </>
     );
}

export default Purchase;