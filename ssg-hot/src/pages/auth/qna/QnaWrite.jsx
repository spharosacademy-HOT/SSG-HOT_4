import React from "react";

function QnaWrite() {
  return (
    <>
      <dl>
        <dt className="blind">
          <label for="postngTitleNm">제목</label>
        </dt>
        <dd className="inp_area">
          <input
            type="text"
            id="postngTitleNm"
            name="postngTitleNm"
            placeholder="제목을 입력해주세요"
            maxlength="35"
          />
          <span className="txnum">0/35</span>
        </dd>

        <dt className="blind">내용</dt>

        <span className="txtarea">
          <label for="postngCntt" className=""></label>
          <textarea
            name="postngCntt"
            id="postngCntt"
            cols="30"
            rows="5"
            placeholder=" 이메일, 휴대폰번호, 주민등록번호와 같은 개인정보의 입력은 금지되어 있습니다."
          ></textarea>
        </span>
      </dl>
    </>
  );
}

export default QnaWrite;
