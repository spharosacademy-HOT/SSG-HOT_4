import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../../components/common/widgets/button/LikeButton';
import ProductPurchaseItem from './ProductPurchaseItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ProductPurchaseBar() {
    const [barState,setBarState] = useState(0)
    const handlePresent = () =>{
        setBarState(1)
    }
    const handlePurchase = () =>{
        setBarState(2)
    }
    const handleClose = () =>{
        setBarState(0)
    }
    
    return ( 
        <>
            <div className={barState === 0 ?
                'product-purchase-bar'
                // 'product-purchase-like'
                // 'product-purchase-buy'
                : barState === 1 ?
                'product-purchase-like'
                : 'product-purchase-buy'}>
                <ul>
                    <li className='product-choice'>
                        {/* 찜하기 컴포넌트 만들어서 넣기 */}
                        <div>
                            <LikeButton/>
                        </div>
                    </li>
                    <li className='product-present'>
                        <div onClick={handlePresent}>
                            선물하기
                        </div>
                    </li>
                    <li className='product-purchase'>
                        <div onClick={handlePurchase}>
                            구매하기
                        </div>
                    </li>
                    <li className='product-basket'>
                        <div>
                            장바구니
                        </div>
                    </li>
                    <li className='product-buy'>
                        <div>
                            <Link to={`/product/purchase`}>
                            바로구매
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={barState === 0 ? 'purchase-info-zero'
                            : 'purchase-info-one'}>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} onClick={handleClose}/>
                </div>
                <div className='product-add'>
                    <div>아이보리(남은 수량)</div>
                    <div><FontAwesomeIcon icon={faAngleDown}/></div>
                </div>
                <ProductPurchaseItem/>
                <div className='product-total-price'>
                    총 합계 <span>65,065</span>원
                </div>
            </div>
        </>
     );
}
export default ProductPurchaseBar;