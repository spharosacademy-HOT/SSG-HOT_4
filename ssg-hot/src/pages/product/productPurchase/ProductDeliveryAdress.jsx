import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getAddress } from '../../../store/apis/address';

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
            console.log(res.data)
            setAddress(res.data)
        })
    },[])

    return ( 
        <>
            <div className='purchase-card-box product-delivery-adress'>
                <div>
                    <div className='purchase-title-style'>
                        배송지 박수아
                    </div>
                    <div className='purchase-change-button'>
                        <button
                            onClick={()=> handleShow(true)}>
                            변경
                        </button>
                    </div>
                </div>
                <div>
                    [49322] 부산광역시 사하구 승학로 131번길 29, 2동 201호 (당리동, 그린하트빌라)
                </div>
                <div className='user-phone-number'>
                    <div>
                        박수아/010-5771-2714
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
                        <div>어디로 보내드릴까요?</div>
                        <div>+ 신규배송지등록</div>
                        <div>

                        </div>
                        <div>더보기</div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default ProductDeliveryAdress;