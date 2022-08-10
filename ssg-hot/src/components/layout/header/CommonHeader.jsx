import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export default function CommonHeader({ title }) {
  return (
    <div className="commonHeader">
      <FontAwesomeIcon icon={faAngleLeft} />
      <h2>{title}</h2>
    </div>
  );
}
