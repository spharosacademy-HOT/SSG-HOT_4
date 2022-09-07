import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import menuImg from "../../../assets/img/png/menu.png";
import * as Api from "../../../store/apis/address";
import { categoryDatas, orderList } from "./SearchFilterData";

export default function SearchFilter({ name, setSearchData }) {
  const [orderby, setOrderby] = useState("전체");
  const [categorOrderby, setCategoryOrderby] = useState("전체");

  const selectChangeHandleSecond = async (eventKey) => {
    setCategoryOrderby(eventKey);
    try {
      const getOrder = orderList.orderby.filter(
        (item) => item.name === orderby
      );
      const getCategoryId = categoryDatas.categoryMList.filter(
        (item) => item.name === eventKey
      );

      if (!getOrder || !getCategoryId) {
        throw new Error(getOrder);
      }
      const sendOrderby = getOrder[0].id;
      const sendCategory = getCategoryId[0].id;
      const getSearch = await Api.get(
        `/product/search?name=${name}&sort=${sendOrderby}&category=${sendCategory}`
      );

      if (!getSearch) {
        throw new Error(getSearch);
      }
      setSearchData(getSearch.data.content);
    } catch (e) {
      console.log(e);
    }
  };
  const selectChangeHandleFirst = async (eventKey) => {
    setOrderby(eventKey);

    try {
      const getOrder = orderList.orderby.filter(
        (item) => item.name === eventKey
      );
      const getCategoryId = categoryDatas.categoryMList.filter(
        (item) => item.name === categorOrderby
      );

      if (!getOrder || !getCategoryId) {
        throw new Error(getOrder);
      }
      const sendOrderby = getOrder[0].id;
      const sendCategory = getCategoryId[0].id;
      const getSearch = await Api.get(
        `/product/search?name=${name}&sort=${sendOrderby}&category=${sendCategory}`
      );

      if (!getSearch) {
        throw new Error(getSearch);
      }
      setSearchData(getSearch.data.content);
    } catch (e) {
      console.log(e);
    }
  };
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
        </DropdownButton>
      </div>
      <div>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title={orderby}
          onSelect={selectChangeHandleFirst}
        >
          <Dropdown.Item eventKey="전체">전체</Dropdown.Item>
          <Dropdown.Item eventKey="낮은가격순">낮은가격순</Dropdown.Item>
          <Dropdown.Item eventKey="높은가격순">높은가격순</Dropdown.Item>
          <Dropdown.Item eventKey="할인율순">할인율순</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <DropdownButton
          id="dropdown-basic-button"
          variant="light"
          title={categorOrderby}
        >
          <div className="searchToolBar">
            <div>카테고리</div>
            <DropdownButton
              id="dropdown-basic-button"
              variant="light"
              title={categorOrderby}
              onSelect={selectChangeHandleSecond}
            >
              <Dropdown.Item eventKey="전체">전체</Dropdown.Item>
              <Dropdown.Item eventKey="명품/수입의류">
                명품/수입의류
              </Dropdown.Item>
              <Dropdown.Item eventKey="여성브랜드패션">
                여성브랜드패션
              </Dropdown.Item>
              <Dropdown.Item eventKey="여성트렌드패션">
                여성트렌드패션
              </Dropdown.Item>
              <Dropdown.Item eventKey="남성패션">남성패션</Dropdown.Item>
              <Dropdown.Item eventKey="캐주얼/유니섹스">
                캐주얼/유니섹스
              </Dropdown.Item>
              <Dropdown.Item eventKey="가방/지갑">가방/지갑</Dropdown.Item>
              <Dropdown.Item eventKey="모자/장갑/ACC">
                모자/장갑/ACC
              </Dropdown.Item>
              <Dropdown.Item eventKey="슈즈/운동화">슈즈/운동화</Dropdown.Item>
              <Dropdown.Item eventKey="가방/지갑">가방/지갑</Dropdown.Item>
              <Dropdown.Item eventKey="명품잡화/아이웨어">
                명품잡화/아이웨어
              </Dropdown.Item>
              <Dropdown.Item eventKey="스킨케어">스킨케어</Dropdown.Item>
              <Dropdown.Item eventKey="메이크업">메이크업</Dropdown.Item>
              <Dropdown.Item eventKey="헤어케어">헤어케어</Dropdown.Item>
              <Dropdown.Item eventKey="바디케어">바디케어</Dropdown.Item>
              <Dropdown.Item eventKey="향수">향수</Dropdown.Item>
              <Dropdown.Item eventKey="기저귀/물티슈/분유/유아식">
                기저귀/물티슈/분유/유아식
              </Dropdown.Item>
              <Dropdown.Item eventKey="출산/육아용품">
                출산/육아용품
              </Dropdown.Item>
              <Dropdown.Item eventKey="       유모차/카시트/실내용품">
                유모차/카시트/실내용품
              </Dropdown.Item>
              <Dropdown.Item eventKey="완구/교구">완구/교구</Dropdown.Item>
              <Dropdown.Item eventKey="신생아/유아패">
                신생아/유아패션
              </Dropdown.Item>
              <Dropdown.Item eventKey="스포츠웨어/용품">
                스포츠웨어/용품
              </Dropdown.Item>
              <Dropdown.Item eventKey="등산/아웃도어">
                등산/아웃도어
              </Dropdown.Item>
              <Dropdown.Item eventKey="캠핑/낚시용품">
                캠핑/낚시용품
              </Dropdown.Item>
              <Dropdown.Item eventKey="골프웨어/용품/클럽">
                골프웨어/용품/클럽
              </Dropdown.Item>
              <Dropdown.Item eventKey="자전거/스케이트/롤러">
                자전거/스케이트/롤러
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </DropdownButton>
      </div>
    </div>
  );
}
