import React, { useEffect } from "react";

function CategoryViewer({ isTrue, item, differ }) {
  // useEffect(() => {
  //   console.log(item);
  // }, []);
  // console.log('비교',differ)
  return (
    <div className={isTrue ? "category-group" : "non-category-group"}>
      <ul className="category-detail-item">
        {item &&
          item.map((list) => (
            <li key={list.id}>
              <a href={list.url}>{list.name}</a>
            </li>
            // <li key={list.id}></li>
          ))}
      </ul>
    </div>
  );
}

export default CategoryViewer;
