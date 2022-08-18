import React from "react";
import {Link} from "react-router-dom"
function CartControlFooter() {
  return (
    <>
      <div className="myodr_btn_newaddr">
        <Link to="/plusship">
        <button type="button">
          <span>
            <span aria-hidden="true">+</span>새 배송지 추가
          </span>
        </button></Link>
      </div>
      <div className="myodr_btnarea">
        <ul>
          <li>
            <button
              type="button"
              className="myodr_btn myodr_btn_gray"
              onClick={()=>"ShpplocList.setOnlyOne();"}
            >
              <span>이번만배송지 설정</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="myodr_btn myodr_btn_orange"
              onClick={()=>"ShpplocList.setBasc();"}
            >
              <span>기본 배송지 설정</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="myodr_infolst">
        <ul>
          <li>
            이마트, 트레이더스 상품은 선택한 배송지에 따라 주문하실 상품의
            재고가 달라집니다.
          </li>
        </ul>
      </div>

      <div className="myodr_banner">
        <a href="http://m.ssg.com/service/eosPickup.ssg?salestrNo=2498">
          <img
            src="//sui.ssgcdn.com/ui/m_ssg/img/cs/bn_pickup.jpg"
            alt="청계천점 PIXEL OPEN 온라인 주문하고 원하는 시간에 픽업을 쓱"
          />
        </a>
      </div>
    </>
  );
}

export default CartControlFooter;
