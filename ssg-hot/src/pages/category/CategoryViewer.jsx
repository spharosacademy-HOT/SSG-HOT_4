import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryViewer({ row, isTrue, item, differ, rowData }) {
  // useEffect(() => {
  //   console.log(item);
  // }, []);
  // console.log('비교',differ)
  return (
    <div className={(row === rowData) ? "category-group" : "non-category-group"}>
      <div>
        <ul className="category-detail-item">
          {item &&
            item.map((list) => (
              <li key={list.id}>
                <Link to={`/productList/${list.id}`}>
                  {list.name}
                </Link>
              </li>
              // <li key={list.id}></li>
            ))}
        </ul>
      </div>
      
    </div>
  );
}

export default CategoryViewer;