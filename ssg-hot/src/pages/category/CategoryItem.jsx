import React from "react";

function CategoryItem({ isTrue, setIsTrue ,item }) {
  const ImageClick = () => {
    setIsTrue(!isTrue);
    console.log(isTrue)
  };

  return (
    <>
      <li>
        <div className="category-clickable">
          <div onClick={ImageClick}>
            <img src={item.imgUrl} alt="카테고리 이미지" />
            <div className={isTrue ? "un-clicked" : "clicked"}></div>
          </div>
          <p>{item.cateName}</p>
        </div>
      </li>
    </>
  );
}

export default CategoryItem;
