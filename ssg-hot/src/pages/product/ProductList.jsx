import React from 'react';
import ProductCardList from './ProductCardList';
import ProductCarosel from './ProductCarosel';
import ProductNav from './ProductNav';

function ProductList() {
    return ( 
        <>
            <ProductNav />
            <ProductCarosel />
            <ProductCardList />
        </>
     );
}

export default ProductList;