import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductReviewPage from './productReview/productReviewDetail/ProductReviewPage';

function ProductSimpleReview({itemNum}) {
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
                <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProductReviewPage/>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default ProductSimpleReview;