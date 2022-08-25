import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function LikeModal2() {
  const [show, setshow] = useState(false);

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <a
          href="#;"
          className="mylike_folder_btn ty_manage clickable"
          data-mylikelayer-target="#mylikeNewFolderManage"
          role="tab"
          aria-selected="false"
          data-react-tarea="좋아요|상단_폴더리스트|폴더관리_클릭"
        >
          <span className="mylike_folder_thmb"></span>
          <em className="mylike_folder_name">폴더관리</em>
        </a>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>폴더관리</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          관리할 폴더가 없어요.
          <br />
          새폴더를 만들어보세요.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            만들기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LikeModal2;
