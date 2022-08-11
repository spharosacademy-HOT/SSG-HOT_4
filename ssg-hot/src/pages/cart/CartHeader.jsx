import {
  faMagnifyingGlass,
  faHouse,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../../components/common/ui/title/Title";

export default function CartHeader() {
  return (
    <div>
      <div className="cartHeader">
      <div className="btn_back clickable" ><span className="sp_ctg_icon ctg_icon_back"><span className="blind">이전 페이지</span></span></div>
        <Title name="장바구니"></Title>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faHouse} />
      </div>
    </div>
  );
}
