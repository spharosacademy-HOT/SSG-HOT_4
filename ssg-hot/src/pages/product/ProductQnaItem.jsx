import React from "react";

export default function ProductQnaItem({ data }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>답변대기</span>
        <span>{data.createdDate}</span>
        <span>{data.email}</span>
      </div>
      <div>
        <span className="blind">문의내용</span>
        <button type="button">
          <span className="blind">
            <span className="sr_off">문의내용 펼치기</span>
            <span className="sr_on">문의내용 접기</span>
          </span>
          <em className="mndtl_qna_tit">{data.title}</em>
          <p className="mndtl_qna_desc">{data.contents}</p>
        </button>
      </div>
    </div>
  );
}
