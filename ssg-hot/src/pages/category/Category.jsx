import React from "react";
import ThemeRecommend from "./ThemeRecommend";
// import styles from './Category.module.css'
// import './Category.module.css'
import "../../styles/styles.css";
import CategoryGroup from "./CategoryGroup";
// import cateDatas from '../../datas/js/cateDatas';
import { useState } from "react";
import { useEffect } from "react";
import ServiceRecommend from "./ServiceRecommend";
import axios from "axios";
import { baseURL } from "../../store/apis/apiClient";

function Category() {

  const [cateNumber , setCateNumber] = useState(0)
  const [isClick, setIsClick] = useState(false)
  const [rowData, setRowData] = useState(false)
  const [cateDatas, setCateDates] =useState([])
  

  useEffect(()=>{
    let setTrues = [ false, false, false, false ];
    console.log(cateNumber)
    setTrues[cateNumber]=true
    console.log('상황',setTrues)
  },[cateNumber])
  useEffect(()=>{
    axios
      .get(`${baseURL}/category`)
      .then((Response) =>{
        setCateDates(Response.data)
        console.log('cateDatas',cateDatas)
      })
  },[])

  return (
    <div>
      <div className="product-head-box"></div>
      {/* 카테고리 */}
      <div className="category">
        {/* 카테고리 하나하나 */}
        {
          cateDatas && cateDatas.map(cateData => (
            <CategoryGroup
              key={cateData.id}
              cateData={cateData}
              viewIsTrue={false}
              cateNumber = {cateNumber}
              setCateNumber={setCateNumber}
              isClick={isClick} 
              setIsClick={setIsClick}
              cateId = {cateData.id}

              setRowData={setRowData}
              rowData={rowData}
            />
          ))
        }
      </div>
      {/* 테마추천 */}
      <div>
        <div className="theme-recommend">
          <ThemeRecommend />
        </div>
      </div>
      {/* SSG 서비스 추천 */}
      <div>
        <div className="category-ssg-service">
          <ServiceRecommend/>
        </div>
      </div>
      <footer className="category-footer">
        <div>
          <a href="/">
            <span>고객센터 |</span>
          </a>
          <a href="/">
            <span>제안해봐쓱 |</span>
          </a>
          <a href="/">
            <span>공지사항 |</span>
          </a>
          <a href="/">
            <span>입점상담 |</span>
          </a>
          <a href="/">
            <span>로그아웃</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Category;