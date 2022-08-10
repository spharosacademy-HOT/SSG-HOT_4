import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ToolBarButton({ name, icon }) {
  return (
    <li>
      <button className="toolBarButton">
        <FontAwesomeIcon
          icon={icon}
          style={{ width: "20px", height: "20px" }}
        />
        <div>{name}</div>
      </button>
    </li>
  );
}
