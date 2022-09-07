import React, { useState } from "react";
import QnaFooter from "./QnaFooter";

function QnaWrite({ productId, type }) {
  const [title, setTitle] = useState("");
  const getTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const [content, setContent] = useState("");
  const getContent = (e) => {
    setContent(e.target.value);
    console.log(e.target.value, "CONTENTS");
  };

  return (
    <>
      <dl style={{ padding: "10px" }}>
        <dt className="blind">
          <label htmlFor="postngTitleNm">제목</label>
        </dt>
        <dd className="qnaInputArea">
          <input
            className="qnaInput"
            type="text"
            id="postngTitleNm"
            name="postngTitleNm"
            placeholder="제목을 입력해주세요"
            maxLength="35"
            onChange={getTitle}
          />
          <span className="txnum">{title.length}/35</span>
        </dd>

        <dt className="blind">내용</dt>

        <span
          className="txtarea"
          style={{
            padding: "10px",
          }}
        >
          <label htmlFor="postngCntt"></label>
          <textarea
            name="postngCntt"
            id="postngCntt"
            cols="30"
            rows="5"
            placeholder=" 이메일, 휴대폰번호, 주민등록번호와 같은 개인정보의 입력은 금지되어 있습니다."
            onChange={getContent}
          ></textarea>
        </span>
      </dl>

      <QnaFooter
        title={title}
        content={content}
        productId={productId}
        type={type}
      />
    </>
  );
}

export default QnaWrite;
