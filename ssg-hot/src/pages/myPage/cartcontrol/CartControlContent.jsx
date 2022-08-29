import React from "react";
import { Link } from "react-router-dom";
function CartControlContent() {
  return (
    <div>
      <div className="myodr_tab_cont">
        <div className="myodr_tab_panel" role="tabpanel">
          <ul className="myodr_tabrdo_lst">
            <li className="myodr_tabrdo">
              <div className="myodr_rdo on">
                <input
                  type="radio"
                  id="ui_test_rdotab0"
                  name="delivery"
                  value="Y"
                  // check="check"
                />
                <label htmlFor="ui_test_rdotab0" className="myodr_rdo_cont">
                  <span className="myodr_rdo_inner">
                    <strong className="tx_deliv_name">
                      <span className="blind">배송지명</span>이창현
                      <em>기본배송지</em>
                    </strong>
                    <span className="tx_deliv_address">
                      <span className="blind">우편번호</span>(46274)
                    </span>
                    <span className="tx_deliv_address">
                      도로명주소: 부산광역시 금정구 중앙대로1763번길 36-22,
                      301호 (부곡동)
                    </span>
                    <span className="tx_deliv_address">
                      지번주소: 부산광역시 금정구 부곡동 64-12 해뜰채 301호
                    </span>
                  </span>
                </label>
                <span className="myodr_btn_rt">
                  <Link to="/plusship">
                    <button type="button" className="myodr_btn_tx">
                      <span>수정</span>
                    </button>
                  </Link>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartControlContent;
