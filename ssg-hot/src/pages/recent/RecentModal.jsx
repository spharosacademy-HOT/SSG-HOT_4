import React from "react";
import {Modal} from 'react-bootstrap';
import Button from "react-bootstrap/Button";


function RecentModal({isTrue, setIsTrue, modalData}) {

  console.log(modalData, isTrue)

  return (
    <>
      <Modal show={isTrue} onHide={()=>setIsTrue(false)}>
        {/* <Modal.Header closeButton>
          <Modal.Title>m.ssg.com 내용:</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          {modalData}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>setIsTrue(false)}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RecentModal;
