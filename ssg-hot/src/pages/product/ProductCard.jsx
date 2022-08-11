import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
    faStar,
    faHeart
} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({item}) {
    return ( 
        <>
            
            <div className='product-thumbnail-card'>
            <Link to={`/product/${item.id}`}>
                <div className='product-image'>
                    <div>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <div className='product-info'>

                    <div className='product-name'>{item.name}</div>
                    <div className='product-text'>{item.detail}</div>

                    <div>
                        <div className='price'>{item.price}원</div>
                    </div>
                    <div>
                        <div>
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div>{item.star}</div>
                        <div>{item.viewCount}건</div>
                    </div>
                    <div className='product-event'>
                        <div>해외직구</div>
                        <div>무료배송</div>
                    </div>
                </div>
            </Link>
            </div>
            
        </>
     );
}

export default ProductCard;