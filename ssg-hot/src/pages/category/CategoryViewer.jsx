import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { categoryMState } from "../../store/atom/purchaseState";

function CategoryViewer({ row, isTrue, item, rowData }) {
  const [categoryMId, setCategoryMId] = useRecoilState(categoryMState);
  const handlecategoryM = (MlistName) =>{
    setCategoryMId(MlistName)
  }
  return (
    <div className={(row === rowData) ? "category-group" : "non-category-group"}>
      <div>
        <ul className="category-detail-item">
          {item &&
            item.map((list) => (
              <li key={list.id} onClick={()=>handlecategoryM(list.name)}>
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