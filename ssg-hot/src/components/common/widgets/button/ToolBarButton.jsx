import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
export default function ToolBarButton({ name, icon, url }) {
  const navigate = useNavigate();
  const handleTest = () => {
    if (url === "/login") {
      alert("로그인 해주세요.");
    }
    navigate(url);
    console.log(name);
  };
  return (
    <li>
      <button className="toolBarButton">
        <FontAwesomeIcon
          icon={icon}
          style={{ width: "20px", height: "20px" }}
          onClick={handleTest}
        />
        <div>{name}</div>
      </button>
    </li>
  );
}
