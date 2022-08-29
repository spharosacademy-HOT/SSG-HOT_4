import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Api from "../../../store/apis/address";
function Address({
  alias,
  city,
  createdDate,
  existed,
  homePhone,
  id,
  phone,
  street,
  taker,
  updatedDate,
  userId,
  zipcode,
  handleChange,
  deleteHandle,
}) {
  return (
    <li className="myodr_tabrdo">
      <div className="myodr_rdo on">
        <input
          type="radio"
          id={`ui_test_rdotab${id}}`}
          name="delivery"
          value={id}
          defaultChecked={existed ? "check" : ""}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label htmlFor={`ui_test_rdotab${id}}`} className="myodr_rdo_cont">
          <span className="myodr_rdo_inner">
            <strong className="tx_deliv_name">
              <span className="blind">배송지명</span>
              {alias}
              {existed ? <em>기본배송지</em> : ""}
            </strong>
            <span className="tx_deliv_address">
              <span className="blind">우편번호</span>({zipcode})
            </span>
            <span className="tx_deliv_address">도로명주소: {city}</span>
            <span className="tx_deliv_address">지번주소: {street}</span>
          </span>
        </label>
        <span className="myodr_btn_rt">
          <button type="button" className="myodr_btn_tx">
            <Link
              to="/plusship"
              state={{
                state: "수정",
                addressInfo: {
                  alias,
                  city,
                  homePhone,
                  id,
                  phone,
                  street,
                  taker,
                  userId,
                  zipcode,
                },
              }}
              style={{ color: "#888" }}
            >
              <span>수정</span>
            </Link>
          </button>
          {!existed ? (
            <button
              type="button"
              className="myodr_btn_tx"
              value={id}
              onClick={(e) => deleteHandle(e, id)}
            >
              <span>삭제</span>
            </button>
          ) : (
            ""
          )}
        </span>
      </div>
    </li>
  );
}

export default Address;
