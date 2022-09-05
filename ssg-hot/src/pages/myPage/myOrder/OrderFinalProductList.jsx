import React from "react";
import {
  addCommas,
  getCurrentDate,
} from "../../../store/utils/useful-funtions";

function OrderFinalProductList({ orderItem }) {
  return (
    <>
      <div className="delivery-container" id="delivery-detail">
        <div className="delivery-info">{orderItem.deliveryStatus}</div>
        <div className="delivery-info">
          {getCurrentDate(orderItem.deliveryInfo)}
        </div>
      </div>
      <div className="mnodr_unit_item">
        <div className="mnodr_unit_thmb">
          <span className="mnodr_unit_img" aria-hidden="true">
            <img
              src={orderItem.stock.product.titleImgUrl}
              alt={`${orderItem.stock.product.titleImgTxt}`}
              width="85"
              height="85"
            />
          </span>
        </div>
        <div className="mnodr_unit_cont">
          <div className="mnodr_unit_info ty2">
            <span className="cm_mall_text">
              <i className="sd">신세계백화점</i>
            </span>

            <em id="dispSalestrNm_1">신세계몰</em>
          </div>
          <p className="mnodr_unit_tit ">
            <a>
              <strong className="mnodr_unit_brd">
                {orderItem.stock.product.brandName}{" "}
              </strong>

              <span className="mnodr_unit_name">
                {orderItem.stock.product.name}
              </span>
            </a>
          </p>

          <span
            className="mnodr_unit_option mnodr_tx_point"
            id="shppRsvtType_1_1_50_"
            style={{ display: "none" }}
          ></span>

          <span className="mnodr_unit_option">
            옵션 : {orderItem.stock.optionFirst.name}/
            {orderItem.stock.optionSecond.name}
          </span>

          <div className="mnodr_unit_prdpay ty_space">
            <div className="mnodr_unit_l">
              <div className="mnodr_unit_oldprice ty2">
                <del>
                  <span className="blind">정상가격</span>
                  <em className="ssg_price">
                    {addCommas(orderItem.stock.product.regularPrice)}
                  </em>
                </del>
                <span className="ssg_tx">원</span>
              </div>

              <div className="mnodr_unit_newprice ty2">
                <span className="blind">판매가격</span>
                <em className="ssg_price">
                  {" "}
                  {addCommas(orderItem.stock.product.discountPrice)}
                </em>
                <span className="ssg_tx">원</span>
              </div>
            </div>
            <div className="mnodr_unit_r">
              <span className="mnodr_unit_option">
                수량 {orderItem.count}개
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderFinalProductList;
