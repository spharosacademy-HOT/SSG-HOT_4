import React from 'react';

function ProductPurchaseBar() {
    return ( 
        <>
            <div className='product-purchase-bar'>
                <ul>
                    <li>
                        {/* 찜하기 컴포넌트 만들어서 넣기 */}
                        <div>
                            찜하기
                        </div>
                    </li>
                    <li>
                        <div>
                            선물하기
                        </div>
                        <div>
                        </div>
                    </li>
                    <li>
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