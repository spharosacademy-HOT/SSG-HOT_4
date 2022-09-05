import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";

export default function ProductQnaItem({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen=()=>{
    setOpen(!open)
  }
  console.log('asdfasdfasdf')
  console.log(data)

  
  return (
    <div className="qna-box">
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        // }}
        
      >
        <span className="waiting-answer">답변대기 &nbsp;</span>
        <span>{data.createdDate} &nbsp;</span>
        <span>{data.email} </span>
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
