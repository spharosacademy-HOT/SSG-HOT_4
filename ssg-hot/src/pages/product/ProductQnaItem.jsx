import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { deleteQna } from "../../store/apis/qna";

export default function ProductQnaItem({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen=()=>{
    setOpen(!open)
  }
  const handleDeleteQna=()=>{
    deleteQna(data.id)
    .then((res)=>{
      console.log(res)
    })
  }
  console.log('asdfasdfasdf')
  console.log(data)

  
  return (
    <div className="qna-box">
      <div className="qna-info">
        <div>
          <span className="waiting-answer">답변대기 &nbsp;</span>
          <span>{data.createdDate} &nbsp;</span>
          <span>{data.email} </span>
        </div>
        <div onClick={handleDeleteQna}>
          삭제
        </div>
      </div>
      <div>
        <span className="blind">문의내용</span>
        <div className="mndtl_qna_tit">
          <em>{data.title}</em>
          <FontAwesomeIcon icon={faCaretDown} onClick={handleOpen}/>
        </div>
        <p className={open?"mndtl_qna_desc_clicked":"mndtl_qna_desc"}>{data.contents}</p>

      </div>
    </div>
  );
}
