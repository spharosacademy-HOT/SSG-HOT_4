import React from 'react';

function ProductInfo() {
    return ( 
        <>
            <div>
                <div className='product-info'>
                    <div className='product-store'>
                        <a href="/">
                            <span>HIPP힙(공식)</span>
                        </a>
                    </div>
                    <div className='product-simple-info'>
                        <span>[HIPP/힙분유]유기농 콤비오틱 800g 1~3단계 X 3캔</span>
                    </div>
                    <div className='product-made-in'>
                        <span>원산지 : 상세설명참조</span>
                    </div>
                </div>
                <div className='product-price'>
                    <div className='discount-price'>
                        {/* 있다면 나오도록 */}
                    </div>
                    <div className='original-price'>
                        119,400
                        {/* 중간에 점 어떻게 불러올까 */}
                    </div>
                </div>
            </div>
        </>
     );
}

export default ProductInfo;