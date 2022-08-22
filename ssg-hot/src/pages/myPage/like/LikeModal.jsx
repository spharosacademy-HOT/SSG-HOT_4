import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function LikeModal() {
  const [show, setshow] = useState(false);

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <a
          href="#;"
          className="mylike_folder_btn ty_create clickable"
          data-mylikelayer-target="#mylikeNewFolder"
          role="tab"
          aria-selected="false"
          data-react-tarea="좋아요|상단_폴더리스트|새폴더_클릭"
        >
          <span className="mylike_folder_thmb"></span>
          <em className="mylike_folder_name">새폴더</em>
        </a>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>새폴더</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          폴더를 추가하여 좋아요를
          <br />
          내맘대로 관리해보세요.
        </Modal.Body>
        <Modal.Footer>
          <div className="mylike_lay_input input" />
          <input
            type="text"
            id="inp_fod"
            name="folder"
            placeholder="폴더명을 입력해주세요"
            maxLength="50"
          />

          <Button variant="primary" onClick={handleClose}>
            만들기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LikeModal;
