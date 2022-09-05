import React from "react";

function CategoryItem({ setViewerView, item,cateNumber, setGetNum, isClick, setIsClick, setRowData, row }) {
  const handleCateItem = () => {
    setGetNum(item.id)
    setViewerView(true)
    // custom
    setRowData(row);
    setIsClick(item.id)
    //setIsClick(!isClick)
  }

  return (

      <li>
        <div className="category-clickable" onClick={handleCateItem}>
          <div>
            <img src={item.imgUrl} alt="카테고리 이미지" />
            <div className={(isClick === item.id) ? "clicked" : "un-clicked"}></div>
          </div>
          <p>{item.cateName}</p>
        </div>
      </li>
  );
}

export default CategoryItem;