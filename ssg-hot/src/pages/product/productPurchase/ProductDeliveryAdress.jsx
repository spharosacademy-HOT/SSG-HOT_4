import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { getAddress } from '../../../store/apis/address';
import ProductDeliveryMyAddress from './ProductDeliveryMyAdress';

function ProductDeliveryAdress() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [address, setAddress] = useState();
    const handleShow = (breakpoint) => {
        setFullscreen(breakpoint);
        setShow(true);
      }
    
    useEffect(()=>{
        getAddress().then((res)=>{
            setAddress(res.data.data)
        })
    },[])
    console.log(address)

    return ( 
        <>
            <div className='purchase-card-box product-delivery-adress'>
                <div>
                    <div className='purchase-title-style'>
                        배송지 : {address && address[0].alias}
                    </div>
                    <div className='purchase-change-button'>
                        <button
                            onClick={()=> handleShow(true)}>
                            변경
                        </button>
                    </div>
                </div>
                <div>
                    [{address && address[0].zipcode}]{address && address[0].street}
                </div>
                <div className='user-phone-number'>
                    <div>
                        {address && address[0].taker}/{address && address[0].phone}
                    </div>
                    <div>
                        <input type="checkbox"/>안심번호 사용
                    </div>
                </div>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header>
                    <div className="backBtn">
                        <button type="button" onClick={() => setShow(false)}></button>
                    </div>
                    <div className='title-style'>
                        배송지선택
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='purchase-title-style'>어디로 보내드릴까요?</div>
                        <Link to="/plusship">
                            <div className='new-delivery-add'>+ 신규배송지등록</div>
                        </Link>
                        {
                            address && address.map(item=>(
                                <ProductDeliveryMyAddress item={item} key={item.id}/>
                            )).slice(0, 3)
                        }
                        <div className='purchase-more-delivery'>더보기</div>
                    </div>
                    <div className='change-button'>
                        변경하기
                    </div>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default ProductDeliveryAdress;