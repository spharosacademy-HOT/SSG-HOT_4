import React, { useState} from 'react'

import Modal from 'react-bootstrap/Modal';
import ProductPurchaseBar from './ProductPurchaseBar';
import ProductReviewCard from './productReview/ProductReviewCard';

function ProductSimpleReview({reviewDatas}) {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    console.log("리뷰데이터들",reviewDatas)
  
    const handleShow = (breakpoint) => {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return ( 
        <>  
        {
            reviewDatas && 
            <>
            <div className='product-simple-review'>
                <div>별점</div>
                <button onClick={() => handleShow(true)}>
                    <div>{reviewDatas.length}건 리뷰</div>
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

                    <div className='product-review-page'>
                        <div className='product-review-info'>
                            <div>
                                <div>별점</div>
                                <div>5.0/5</div>
                            </div>
                            <div className='total-review-cnt'>{reviewDatas && reviewDatas.length}건 리뷰</div>
                        </div>
                        {
                        reviewDatas && reviewDatas.map(item=>(
                            <ProductReviewCard key={item.id} item={item}/>
                        ))   
                        }
                        <ProductPurchaseBar/>
                    </div>

                </Modal.Body>
            </Modal>
            </>
        }
            
        </>
     );
}

export default ProductSimpleReview;