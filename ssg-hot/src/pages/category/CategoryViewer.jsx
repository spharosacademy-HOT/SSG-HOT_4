import React, { useEffect } from "react";

function CategoryViewer({ isTrue, item }) {
  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <div className={isTrue ? "category-group" : "non-category-group"}>
      <ul className="category-detail-item">
        {item.content &&
          item.content.map((list) => (
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
