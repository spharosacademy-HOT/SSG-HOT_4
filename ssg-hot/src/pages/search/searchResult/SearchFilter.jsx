import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import menuImg from "../../../assets/img/png/menu.png";
export default function SearchFilter() {
  return (
    <div className="searchToolBar">
      <div>
        <img src={menuImg} alt="" style={{ width: "25px", height: "20px" }} />
      </div>

      <div>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title="백화점상품"
        >
          <Dropdown.Item>백화점상품</Dropdown.Item>
          <Dropdown.Item>매장픽업</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title="추천순"
        >
          <Dropdown.Item>추천순</Dropdown.Item>
          <Dropdown.Item>판매량순</Dropdown.Item>
          <Dropdown.Item>낮은가격순</Dropdown.Item>
          <Dropdown.Item>높은가격순</Dropdown.Item>
          <Dropdown.Item>할인율순</Dropdown.Item>
          <Dropdown.Item>신상품순</Dropdown.Item>
          <Dropdown.Item>리뷰많은순</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <DropdownButton id="dropdown-basic-button" variant="light" title="필터">
          <div className="searchToolBar">
            <div>카테고리</div>
            <DropdownButton
              id="dropdown-basic-button"
              variant="light"
              title="전체"
            >
              <Dropdown.Item>패션의류</Dropdown.Item>
              <Dropdown.Item>명품/잡화/쥬얼리</Dropdown.Item>
              <Dropdown.Item>뷰티</Dropdown.Item>
              <Dropdown.Item>가구/인테리어</Dropdown.Item>
              <Dropdown.Item>유아동</Dropdown.Item>
              <Dropdown.Item>스포츠/레저</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="searchToolBar">
            <div>가격</div>
            <DropdownButton
              id="dropdown-basic-button"
              variant="light"
              title="전체"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </DropdownButton>
      </div>
    </div>
  );
}
