import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { deleteQna, getQna } from "../../store/apis/qna";

export default function ProductQnaItem({ data, setQaData, productId}) {
  const [open, setOpen] = useState(false);
  const [qnaData, setQnaData] = useState(data)

  const handleOpen=()=>{
    setOpen(!open)
  }
  const handleDeleteQna=()=>{
    deleteQna(data.id)
    .then((res)=>{
      console.log(res)
    })
    .then(
      console.log('a',productId),
    )
    getQna(productId)
    .then((res)=>{
      console.log('asdfasdfasdf',res)
      setQaData(res.data.content)
    })
  }

  
  return (
    <div className="qna-box">
      <div className="qna-info">
        <div>
          <span className="waiting-answer">답변대기 &nbsp;</span>
          <span>{data.createdDate} &nbsp;</span>
          <span>{data.email} </span>
        </div>
        <div onClick={()=>handleDeleteQna()}>
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
