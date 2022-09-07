import React from "react";
import { useNavigate } from "react-router-dom";

export default function CommonHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div className="commonHeader">
      <div className="backBtn">
        <button type="button" onClick={() => navigate(-1)}></button>
      </div>
      <h2>{title}</h2>
    </div>
  );
}
