import React from "react";

function OrderFilter() {
  return (
    <div
      className="mnodr_modal ty_full"
      role="dialog"
      tabindex="-1"
      aria-hidden="true"
      id="_layerOdrSrcDtl"
    >
      <div className="mnodr_modal_wrap" role="document" tabindex="0">
        <header className="mnodr_modal_head">
          <h1 className="mnodr_modal_tit">상세조회</h1>
          <button
            type="button"
            className="mnodr_modal_close modal-close-btn orderInfoTracking"
            data-tracking-cd="00014_000000097_t00060"
            data-tracking-value="닫기"
          >
            <i className="mnodr_ic ic_close">
              <span className="blind">팝업닫기</span>
            </i>
          </button>
        </header>
        <div className="mnodr_modal_cont">
          <div className="mnodr_modal_scroll">
            <div className="mnodr_form_sec">
              <h3 className="mnodr_form_tit mnodr_tx_size3">상품/브랜드</h3>
              <div className="mnodr_form_cont">
                <span
                  className="codr_inp_txt ty2 orderInfoTracking"
                  data-tracking-cd="00014_000000097_t00060"
                  data-tracking-value="상품/브랜드 검색"
                >
                  <input
                    type="text"
                    id="searchKeyword"
                    value=""
                    placeholder="상품명 혹은 브랜드명으로 검색하세요."
                    maxLength={"50"}
                  />
                </span>
              </div>
              <ul className="mnodr_rdo_lst_rdus"></ul>
              <h3 className="mnodr_form_tit mnodr_tx_size3">조회기간</h3>
              <div className="mnodr_form_cont">
                <ul className="mnodr_rdo_lst_rdus">
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        id="searchType_1"
                        value="6"
                        name="searchType"
                        className="blind"
                        checked="checked"
                      />
                      <label for="searchType_1">
                        <span
                          className="mnodr_tx_size5v orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00075"
                          data-tracking-value="3개월"
                        >
                          3개월
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        id="searchType_2"
                        value="7"
                        name="searchType"
                        className="blind"
                      />
                      <label for="searchType_2">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00075"
                          data-tracking-value="6개월"
                        >
                          6개월
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        id="searchType_3"
                        value="8"
                        name="searchType"
                        className="blind"
                      />
                      <label for="searchType_3">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00075"
                          data-tracking-value="9개월"
                        >
                          9개월
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        id="searchType_4"
                        value="9"
                        name="searchType"
                        className="blind"
                        checked="checked"
                      />
                      <label for="searchType_4">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00075"
                          data-tracking-value="12개월"
                        >
                          12개월
                        </span>
                      </label>
                    </span>
                  </li>
                  <li id="searchDt" className="ty_date ">
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        id="searchType_5"
                        value="5"
                        name="searchType"
                        className="blind"
                      />
                      <label for="searchType_5">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00075"
                          data-tracking-value="기간설정"
                        >
                          기간설정
                        </span>
                      </label>
                    </span>
                    <div className="mnodr_date_rdus">
                      <input id="startDt" type="date" value="2022-06-04" />
                      <span className="mnodr_prd_txt">~</span>
                      <input id="endDt" type="date" value="2022-09-04" />
                    </div>
                  </li>
                </ul>
              </div>
              <h3 className="mnodr_form_tit mnodr_tx_size3">
                상품&amp;배송유형
              </h3>
              <div className="mnodr_form_cont">
                <ul className="mnodr_rdo_lst_rdus">
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_A"
                        value=""
                        className="blind"
                        checked="checked"
                      />
                      <label for="searchCheckBox_A">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="전체"
                        >
                          전체
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_1"
                        value="01"
                        className="blind"
                      />
                      <label for="searchCheckBox_1">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="쓱배송"
                        >
                          쓱배송
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_2"
                        value="02"
                        className="blind"
                      />
                      <label for="searchCheckBox_2">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="새벽배송"
                        >
                          새벽배송
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_3"
                        value="03"
                        className="blind"
                      />
                      <label for="searchCheckBox_3">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="택배배송"
                        >
                          택배배송
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_4"
                        value="04"
                        className="blind"
                      />
                      <label for="searchCheckBox_4">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="정기배송"
                        >
                          정기배송
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_5"
                        value="05"
                        className="blind"
                      />
                      <label for="searchCheckBox_5">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="퀵배송"
                        >
                          퀵배송
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_6"
                        value="06"
                        className="blind"
                      />
                      <label for="searchCheckBox_6">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="모바일상품"
                        >
                          모바일상품
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_7"
                        value="07"
                        className="blind"
                      />
                      <label for="searchCheckBox_7">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="백화점"
                        >
                          백화점
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_8"
                        value="08"
                        className="blind"
                      />
                      <label for="searchCheckBox_8">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="매장픽업"
                        >
                          매장픽업
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_9"
                        value="09"
                        className="blind"
                      />
                      <label for="searchCheckBox_9">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="점포픽업"
                        >
                          점포픽업
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_10"
                        value="10"
                        className="blind"
                      />
                      <label for="searchCheckBox_10">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="선물주문"
                        >
                          선물주문
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdType"
                        id="searchCheckBox_19"
                        value="19"
                        className="blind"
                      />
                      <label for="searchCheckBox_19">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00076"
                          data-tracking-value="함께장보기"
                        >
                          함께장보기
                        </span>
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
              <h3 className="mnodr_form_tit mnodr_tx_size3">배송상태</h3>
              <div className="mnodr_form_cont">
                <ul className="mnodr_rdo_lst_rdus">
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_B"
                        value=""
                        className="blind"
                        checked="checked"
                      />
                      <label for="searchCheckBox_B">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="전체"
                        >
                          전체
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_11"
                        value="11"
                        className="blind"
                      />
                      <label for="searchCheckBox_11">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="결제완료"
                        >
                          결제완료
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_12"
                        value="12"
                        className="blind"
                      />
                      <label for="searchCheckBox_12">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="상품준비중"
                        >
                          상품준비중
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_13"
                        value="13"
                        className="blind"
                      />
                      <label for="searchCheckBox_13">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="배송중"
                        >
                          배송중
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_14"
                        value="14"
                        className="blind"
                      />
                      <label for="searchCheckBox_14">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="배송완료"
                        >
                          배송완료
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_15"
                        value="15"
                        className="blind"
                      />
                      <label for="searchCheckBox_15">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="입금대기"
                        >
                          입금대기
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_16"
                        value="16"
                        className="blind"
                      />
                      <label for="searchCheckBox_16">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="주문취소"
                        >
                          주문취소
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_17"
                        value="17"
                        className="blind"
                      />
                      <label for="searchCheckBox_17">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="반품"
                        >
                          반품
                        </span>
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="mnodr_rdo_rdus">
                      <input
                        type="radio"
                        name="searchCheckBox_OrdStat"
                        id="searchCheckBox_18"
                        value="18"
                        className="blind"
                      />
                      <label for="searchCheckBox_18">
                        <span
                          className="mnodr_tx_size5 orderInfoTracking"
                          data-tracking-cd="00014_000000097_t00077"
                          data-tracking-value="교환"
                        >
                          교환
                        </span>
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="codr_modal_close modal-close-btn orderInfoTracking"
          data-tracking-cd="00014_000000097_t00060"
          data-tracking-value="닫기"
        >
          <span className="blind">닫기</span>
        </button>
        <footer className="mnodr_modal_foot">
          <div className="mnodr_btn_area ty2">
            <button
              type="button"
              id="btnResetSearchCond"
              className="mnodr_btn ty_gray2 ty_lg orderInfoTracking"
              data-tracking-cd="00014_000000097_t00060"
              data-tracking-value="초기화"
            >
              <span className="mnodr_btn_tx">
                <span className="blind">상세조회</span>초기화
              </span>
            </button>
            <button
              type="button"
              id="btnSearchOrdList"
              className="mnodr_btn ty_point ty_lg orderInfoTracking"
              data-tracking-cd="00014_000000097_t00060"
              data-tracking-value="조회하기"
            >
              <span className="mnodr_btn_tx">조회하기</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default OrderFilter;
