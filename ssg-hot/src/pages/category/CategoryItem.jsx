import React from "react";

function CategoryItem({ setViewerView, isClick, setIsClick, item }) {

  const handleCateItem = () => {
    setViewerView(true)
    setIsClick(!isClick)

  }
  console.log('두번째')
  console.log(item)

  return (

      <li>
        <div className="category-clickable" onClick={handleCateItem}>
          <div>
            <img src={item.imgUrl} alt="카테고리 이미지" />
            <div className={isClick ? "clicked" : "un-clicked"}></div>
          </div>
          <p>{item.name}</p>
        </div>
      </li>
  );
}

export default CategoryItem;
