import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function ProductMainImg({productDatas}) {
    const navigate = useNavigate()
    return ( 
        <>
            <div className='product-main-image'>
                <div>
                    <button className="btn_back" onClick={() => navigate(-1)}>
                        <span>
                            <FontAwesomeIcon icon={ faArrowLeft } />
                        </span>
                    </button>
                </div>
                
                <img src={productDatas && productDatas} alt="" />
            </div>
        </>
     );
}

export default ProductMainImg;