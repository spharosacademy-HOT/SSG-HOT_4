import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';

function ProductShippingRequest() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return ( 
        <>
            <div className='purchase-card-box product-shipping-request'>
                <div className='title-line'>
                    <div className='purchase-title-style'>배송 요청사항</div>
                    <div className='purchase-change-button'><button onClick={() => handleShow(true)}>변경</button></div>
                </div>
                <div className='sub-line'>
                    <div>택배배송 요청사항</div>
                    <div>직접 받겠습니다</div>
                </div>
            </div>
            <div>
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <div>
                        수령위치 선택
                    </div>
                    <div className='shipping-modal'>
                        <div className='purchase-title-style'>택배배송 요청사항</div>
                        <ul>
                            <li>
                                <input type="radio" name='ship' id='message1'/>
                                <label htmlFor="messsage1">부재 시 경비실에 맡겨주세요</label>
                            </li>
                            <li>
                                <input type="radio" name='ship' id='message2'/>
                                <label htmlFor="messsage2">부재 시 문앞에 놓아주세요</label>
                            </li>
                            <li>
                                <input type="radio" name='ship' id='message3'/>
                                <label htmlFor="messsage3">직접 받겠습니다</label>
                            </li>
                            <li>
                                <input type="radio" name='ship' id='message4'/>
                                <label htmlFor="messsage4">배송 전에 연락주세요</label>
                            </li>
                            <li>
                                <input type="radio" name='ship' id='message4'/>
                                <label htmlFor="messsage4">직접 입력</label>
                            </li>
                        </ul>
                        <div>
                            <div className='emart-color'>
                                <input type="checkbox" />다음 배송에도 계속 사용할게요
                            </div>
                            <p className='small-font'>편리한 배송을 위해 배송 목적에 한해 사용하겠습니다</p>
                        </div>
                    </div>
                    <div className='change-button'>
                        변경하기
                    </div>
                    
                </Modal>
            </div>
        </>
     );
}

export default ProductShippingRequest;