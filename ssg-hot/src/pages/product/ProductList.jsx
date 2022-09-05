import React from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { purchaseState, totalPriceState } from '../../store/atom/purchaseState';
import ProductCardList from './ProductCardList';
import ProductCarosel from './ProductCarosel';
import ProductNav from './ProductNav';

function ProductList() {
    const[purchaseList,setPurchaseList] = useRecoilState(purchaseState)
    const[totalPrice, setTotalPrice] = useRecoilState(totalPriceState)

    useEffect(()=>{
        setPurchaseList([])
        setTotalPrice(0)
    },[])
    return ( 
        <>
            <ProductNav />
            <ProductCarosel />
            <ProductCardList />
        </>
     );
}

export default ProductList;