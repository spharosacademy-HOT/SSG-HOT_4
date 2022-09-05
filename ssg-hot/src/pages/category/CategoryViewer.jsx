import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryViewer({ row, isTrue, item, rowData }) {
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
            ))}
        </ul>
      </div>
      
    </div>
  );
}

export default CategoryViewer;