import React from "react";

function CategoryItem({ setViewerView, item,cateNumber, setGetNum, isClick, setIsClick, setDiffer, categoryId }) {

  const handleCateItem = () => {
    // cateNumber !== categoryId.id ? setDiffer(true) : setDiffer(false)
    // setGetNum(categoryId.id)
    setViewerView(true)
    setIsClick(!isClick)

  }

  return (

      <li>
        <div className="category-clickable" onClick={handleCateItem}>
          <div>
            <img src={categoryId.imgUrl} alt="카테고리 이미지" />
            <div className={isClick ? "clicked" : "un-clicked"}></div>
          </div>
          <p>{categoryId.name}</p>
        </div>
      </li>
  );
}

export default CategoryItem;
