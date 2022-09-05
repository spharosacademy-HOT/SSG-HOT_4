import React from "react";

function OrderDate() {
  return (
    <>
      <input type="hidden" id="searchType" value="6" />
      <input type="hidden" id="pageNo" value="1" />
      <input type="hidden" id="searchCheckBox" value="" />
      <input type="hidden" id="searchStartDt" value="2022.06.04" />
      <input type="hidden" id="searchEndDt" value="2022.09.04" />
      <div className="mnodr_filter_head">
        <div className="mnodr_control_tx ty_flthead">
          <div className="mnodr_selbox ty_flthead" data-o-selbox="">
            <a
              href="#"
              className="mnodr_selbox_selected ty_flthead orderInfoTracking"
              data-tracking-cd="00014_000000096_t00060"
              data-tracking-value="기간"
            >
              <span className="mnodr_selbox_tx" id="searchTypePeriodTitle">
                최근 3개월
              </span>
            </a>
            <ul className="mnodr_selbox_list ty_flthead">
              <li className="mnodr_selbox_item on">
                <a
                  href="#"
                  name="searchTypePeriod"
                  data-search-type="6"
                  className="mnodr_selbox_tx"
                >
                  <span className="mnodr_selbox_tx_prefix">최근</span>
                  <span>3개월</span>
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a
                  href="#"
                  name="searchTypePeriod"
                  data-search-type="7"
                  className="mnodr_selbox_tx"
                >
                  <span className="mnodr_selbox_tx_prefix">최근</span>
                  <span>6개월</span>
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a
                  href="#"
                  name="searchTypePeriod"
                  data-search-type="8"
                  className="mnodr_selbox_tx"
                >
                  <span className="mnodr_selbox_tx_prefix">최근</span>
                  <span>9개월</span>
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a
                  href="#"
                  name="searchTypePeriod"
                  data-search-type="9"
                  className="mnodr_selbox_tx"
                >
                  <span className="mnodr_selbox_tx_prefix">최근</span>
                  <span>12개월</span>
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mnodr_control_tx ty_flthead">
          <div className="mnodr_selbox ty_flthead" data-o-selbox="">
            <a
              href="#"
              className="mnodr_selbox_selected ty_flthead orderInfoTracking"
              data-tracking-cd="00014_000000096_t00060"
              data-tracking-value="배송유형"
            >
              <span className="mnodr_selbox_tx">전체</span>
            </a>
            <ul className="mnodr_selbox_list ty_flthead">
              <li className="mnodr_selbox_item on ">
                <a
                  href="#"
                  name="searchTypeShpp"
                  data-search-type=""
                  className="mnodr_selbox_tx"
                >
                  전체
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a
                  href="#"
                  name="searchTypeShpp"
                  data-search-type="01"
                  className="mnodr_selbox_tx"
                >
                  쓱배송
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a
                  href="#"
                  name="searchTypeShpp"
                  data-search-type="02"
                  className="mnodr_selbox_tx"
                >
                  새벽배송
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a
                  href="#"
                  name="searchTypeShpp"
                  data-search-type="03"
                  className="mnodr_selbox_tx"
                >
                  택배배송
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          id="btnOrderSearchDtl"
          className="codr_srch_btn modal-fix-open orderInfoTracking"
          data-tracking-cd="00014_000000096_t00060"
          data-tracking-value="상세조회"
          data-layer-target="#_layerOdrSrcDtl"
        >
          상세조회<span className="ico_more"></span>
        </button>
      </div>
    </>
  );
}
export default OrderDate;
