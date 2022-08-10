import {
  faMagnifyingGlass,
  faHouse,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../../components/common/ui/title/Title";

export default function CartHeader() {
  return (
    <div>
      <div className="cartHeader">
        <FontAwesomeIcon icon={faArrowLeft} />
        <Title name="장바구니"></Title>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faHouse} />
      </div>
    </div>
  );
}
