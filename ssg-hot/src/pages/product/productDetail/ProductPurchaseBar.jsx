import React from 'react';

function ProductPurchaseBar() {
    return ( 
        <>
            <div className='product-purchase-bar'>
                <ul>
                    <li className='product-choice'>
                        {/* 찜하기 컴포넌트 만들어서 넣기 */}
                        <div>
                            찜하기
                        </div>
                    </li>
                    <li className='product-present'>
                        <div>
                            선물하기
                        </div>
                        <div>
                        </div>
                    </li>
                    <li className='product-purchase'>
                        <div>
                            구매하기
                        </div>
                        <div>
    
                        </div>
                    </li>
                </ul>
            </div>
        </>
     );
}
export default ProductPurchaseBar;