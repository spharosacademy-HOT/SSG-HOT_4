import React, { useEffect, useState} from 'react'

import Modal from 'react-bootstrap/Modal';
import ProductReviewPage from './productReview/productReviewDetail/ProductReviewPage';
import axios from 'axios';
import CommonHeader from '../../../components/layout/header/CommonHeader';

function ProductSimpleReview({itemNum, reviewDatas}) {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
    return ( 
        <>
            <div className='product-simple-review'>
                <div>별점</div>
                <button onClick={() => handleShow(true)}>
                    <div>75건 리뷰</div>
                </button>
            </div>
            <hr />
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header>
                        <div className="backBtn">
                            <button type="button" onClick={() => setShow(false)}></button>
                        </div>
                        <div className='title-style'>
                            고객리뷰
                        </div>
                </Modal.Header>
                <Modal.Body>
                    <ProductReviewPage/>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default ProductSimpleReview;