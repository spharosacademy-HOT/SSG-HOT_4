import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../store/apis/apiClient";

function CategoryViewer({ isTrue, item}) {
  const [categoryMId,setCategoryMId] = useState([])
  useEffect(() => {
    axios
      .get(`${baseURL}/category/${item}`)
      .then((Response)=>{
          setCategoryMId(Response.data.categoryMList)
      })
  }, []);
  console.log(categoryMId)

  return (
    <div className={isTrue ? "category-group" : "non-category-group"}>
      <div>
        <ul className="category-detail-item">
          {categoryMId &&
            categoryMId.map((list) => (
            <li key={list.id}>
                <Link to={`/productList/${list.id}`}>
                  {list.name}
                </Link>
            </li>
            // <li key={list.id}></li>
            ))}
            <li>
              <Link to={`/productList/${item.id}`}>
                {item.name}
              </Link>
            </li>
        </ul>
      </div>
      
    </div>
  );
}

export default CategoryViewer;
