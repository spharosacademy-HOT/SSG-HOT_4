import React, { useState, useEffect } from "react";
import QnaItem from "../../../components/common/widgets/itemList/qna/QnaItem";
import axios from "axios";
import { baseURL } from "../../../store/apis/apiClient";
// import { useParams } from "react-router-dom";

function QnaItemData() {
  // let params = useParams();
// console.log(params)
  const [qaData, setQaData] = useState();

  // useEffect(() => {
  //   axios.get(`${baseURL}/qna/${params}`).then((Response) => {
  //     setQaData(Response.data);
  //     console.log(Response.data);
  //   });
  // }, []);

  return (
    <>
      <div className="qnaItem">
        {qaData
          ? qaData.map((data) => <QnaItem key={data.id} item={data} />)
          : ""}
      </div>
    </>
  );
}

export default QnaItemData;
