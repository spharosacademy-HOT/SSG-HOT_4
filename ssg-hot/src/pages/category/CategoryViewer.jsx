import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryViewer({ isTrue, item, getNum}) {
  // useEffect(() => {
  //   console.log(item);
  // }, []);
  return (
    <div className={isTrue ? "category-group" : "non-category-group"}>
      <div>
        <ul className="category-detail-item">
          {item &&
            item.map((list) => (
              <li key={list.id}>
                <Link to={`/productList/${getNum}/${list.id}`}>
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
