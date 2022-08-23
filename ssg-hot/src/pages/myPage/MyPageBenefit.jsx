import React from "react";

function MyPageBenefit() {
  return (
    <div className="myssg_user_benefit" style={{ margin: "2rem 0" }}>
      <div className="myssg_coupon_point myssg_layer_conts">
        <div className="myssg_coupon">
          <a
            href="https://m.ssg.com/myssg/moneyMng/memberCpnOwnList.ssg?_mpop=new"
            className="myssg_link clickable"
            data-react-tarea="MYSSG|M_MY_SSG_쿠폰"
          >
            <dl>
              <dt>쿠폰</dt>
              <dd>
                <span className="myssg_benefit_score">0</span>장
              </dd>
            </dl>
          </a>
        </div>
        <div className="myssg_point">
          <a
            href="https://m.ssg.com/myssg/moneyMng/spointMain.ssg?_mpop=new"
            className="myssg_link myssg_point_link"
          >
            <dl>
              <dt>신세계포인트</dt>
              <dd>
                <span className="myssg_benefit_score">0</span>p{" "}
              </dd>
            </dl>
          </a>
          <button
            type="button"
            className="myssg_layer_open_btn myssg_barcode_btn clickable"
            data-react-tarea="MYSSG|M_MY_SSG_신세계포인트카드"
          >
            <span className="blind">신세계포인트 자세히 보기</span>
          </button>
        </div>
        <div className="myssg_layer myssg_point_layer">
          <div className="myssg_point_layer_conts">
            <div className="myssg_point_layer_tit">
              <input
                type="hidden"
                name="pointCardNo"
                id="pointCardNo"
                value="9350130365567609"
              />
              <span className="myssg_point_layer_tit_tx">
                신세계 포인트 0 p
              </span>
              <div className="myssg_point_close_wrap">
                <button
                  type="button"
                  className="myssg_layer_close myssg_close_btn"
                >
                  <span className="blind">닫기</span>
                </button>
              </div>
            </div>
            <div className="myssg_point_barcode" id="barcode_area"></div>
            <p
              className="myssg_point_desc"
              id="barcode_err"
              style={{ display: "none" }}
            >
              <span className="myssg_point_desctx">
                안정적인 서비스를 위해 점검중입니다.
                <br />
                양해부탁드립니다
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="myssg_ssgmoney v2">
        <div className="myssg_link myssg_ssgmoney_link">
          <dl>
            <dt>
              <a
                href="https://m.ssg.com/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList"
                className="myssg_link myssg_ssgmoney_link"
                data-react-tarea="MYSSG|M_MY_SSG_SSGMONEY"
              >
                SSG MONEY
                <span>스마일캐시를 SSG MONEY로 쓱 전환해보세요!</span>
              </a>
            </dt>
            <dd>
              <a href="https://m.ssg.com/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList">
                <span className="myssg_benefit_score">0</span>원
              </a>
              <div
                className="myssg_ssgmoney_buttons"
                data-react-tarea-cd="00034_000000003"
              >
                <button
                  type="button"
                  className="myssg_ssgmoney_charge clickable"
                  data-react-unit-type="text"
                  data-react-unit-id=""
                  data-react-unit-text='[{"type":"tarea_addt_val","value":"충전하기"}]'
                  data-react-tarea-dtl-cd="t00060"
                >
                  충전하기
                </button>
                <button
                  type="button"
                  className="myssg_ssgmoney_transform clickable"
                  data-react-unit-type="text"
                  data-react-unit-id=""
                  data-react-unit-text='[{"type":"tarea_addt_val","value":"전환하기"}]'
                  data-react-tarea-dtl-cd="t00060"
                >
                  전환하기
                </button>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default MyPageBenefit;
