import React from "react";
import recommendData from "../../../datas/js/recommendData";

export default function RecommendItem() {
  return (
    <div className="cmgrid_module">
      <div className="cmgrid_list">
        {recommendData &&
          recommendData.map((item) => (
            <div className="cmgrid_item_box cmitem_ty_thmb">
              <div className="cmitem_unit">
                <div className="cmitem_helper">
                  <div className="cmitem_helper_el cmitem_best">1</div>

                  <div className="cmitem_helper_el cmitem_rank cmitem_rank_up">
                    <em className="cmitem_rank_num">{item.id}</em>
                    <span className="blind">순위 상승</span>
                  </div>
                </div>

                <div className="cmitem_goods  cmitem_status_soldout">
                  <div className="cmitem_thmb">
                    <a
                      href="#"
                      className="cmitem_thmb_link"
                      onclick="appBroswer('http://m.emart.ssg.com/item/itemView.ssg?itemId=1000043901189&amp;siteNo=6001&amp;salestrNo=2118','stack'); return false;"
                    >
                      <div className="cmitem_thmb_imgbx">
                        <img
                          src={item.imgUrl}
                          alt="노브랜드 미네랄워터 2L*6"
                          className="cmitem_thmb_img ssg_lazy"
                        />
                      </div>
                    </a>
                  </div>

                  <div className="cmitem_detailbx">
                    <div className="cmitem_tx_thmb">
                      <div className="cmitem_mall">
                        <div className="cm_mall_ship em">
                          <span className="cm_ship_tx">{item.ship}</span>
                        </div>

                        <div className="cmitem_btn_wrap">
                          <button
                            type="button"
                            className="cmitem_btn_cart"
                            name="layerSaveCart"
                          >
                            <i className="mnodr_ic ic_cart">
                              <span className="blind">장바구니 담기</span>
                            </i>
                          </button>
                          <input type="hidden" name="siteNo" value="6001" />
                          <input
                            type="hidden"
                            name="itemId"
                            value="1000043901189"
                          />
                          <input type="hidden" name="uitemId" value="00000" />
                          <input type="hidden" name="salestrNo" value="2118" />
                          <input type="hidden" name="cartShareId" value="" />

                          <input type="hidden" name="ordQty" value="1" />
                        </div>
                      </div>
                      <a
                        href="#"
                        className="cmitem_tx_thmb_link"
                        onclick="appBroswer('http://m.emart.ssg.com/item/itemView.ssg?itemId=1000043901189&amp;siteNo=6001&amp;salestrNo=2118','stack'); return false;"
                      >
                        <div className="cmitem_tit">
                          <span className="cm_mall_text">
                            <i>{item.mall}</i>
                          </span>
                          <span className="cmitem_goods_tit">{item.title}</span>
                        </div>
                        <div className="cmitem_pricewrap">
                          <div className="cmitem_price_row cmitem_ty_oldpr"></div>
                          <div className="cmitem_price_row cmitem_ty_newpr">
                            <div className="new_price">
                              <span className="blind">판매가격</span>
                              <em className="ssg_price">{item.price}</em>
                              <span className="ssg_tx">원</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="cmitem_sideinfo">
                      <div className="cmitem_benefit_lst">
                        <div className="cmitem_review">
                          <div className="cmitem_review_score">
                            <i
                              className="icon ty_xs icon_star_fill"
                              aria-hidden="true"
                            ></i>
                            <span className="blind">상품평점 5점 만점에</span>
                            {item.score}
                          </div>
                          <div className="cmitem_review_num">
                            <span className="blind">상품평 개수</span>
                            {item.reviewCnt}건
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
