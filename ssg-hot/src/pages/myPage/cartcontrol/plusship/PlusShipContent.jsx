import React from "react";

function PlusShipContent() {
  return (
    <>
      <div id="m_content">
        <div className="m_addrbx order_sectionwrap">
          <div className="delivery_detail">
            <div
              className="order_article new_delivery_add"
              style={{ display: "block" }}
            >
              <div className="order_artcont">
                <div className="order_infoset">
                  <form id="submitForm" />
                  <ul className="order_infolist">
                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="shpplocAntnmNm">주소별칭</label>
                      </span>
                      <div className="oi_cont">
                        <span className="inpbx">
                          <input
                            type="text"
                            id="shpplocAntnmNm"
                            name="shpplocAntnmNm"
                            placeholder="주소별칭 입력"
                            defaultValue=""
                            maxLength="20"
                          />
                        </span>
                      </div>
                    </li>

                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="rcptpeNm">받는 분</label>
                      </span>
                      <div className="oi_cont">
                        <span className="inpbx">
                          <input
                            type="text"
                            id="rcptpeNm"
                            name="rcptpeNm"
                            placeholder="받는분 성함입력"
                            defaultValue=""
                            maxLength="20"
                          />
                        </span>
                      </div>
                    </li>
                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="phoneNum1">휴대폰</label>
                      </span>
                      <div className="oi_cont">
                        <div className="oi_phone_pd">
                          <span className="p_first">
                            <span className="des_select">
                              <span className="cc_ellip_in">010</span>
                              <span className="sp_com sel_arrow">&nbsp;</span>
                              <span className="hide_select">
                                <select id="phoneNum1" title="휴대폰 앞자리">
                                  <option defaultValue="010">010</option>
                                  <option defaultValue="011">011</option>
                                  <option defaultValue="016">016</option>
                                  <option defaultValue="017">017</option>
                                  <option defaultValue="018">018</option>
                                  <option defaultValue="019">019</option>
                                </select>
                              </span>
                            </span>
                          </span>
                          <span className="inpbx">
                            <input
                              type="tel"
                              title="휴대폰(숫자만 입력)"
                              placeholder="휴대폰(숫자만 입력)"
                              id="phoneNum2"
                              defaultValue=""
                              maxLength="8"
                            />
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="lf_like4">전화번호(선택)</label>
                      </span>
                      <div className="oi_cont">
                        <div className="oi_phone_pd">
                          <span className="p_first">
                            <span className="des_select">
                              <span className="cc_ellip_in"></span>
                              <span className="sp_com sel_arrow">&nbsp;</span>
                              <span className="hide_select">
                                <select id="telNum1" title="전화번호 앞자리">
                                  <option defaultValue="">선택</option>
                                  <option defaultValue="02">02</option>
                                  <option defaultValue="031">031</option>
                                  <option defaultValue="032">032</option>
                                  <option defaultValue="033">033</option>
                                  <option defaultValue="041">041</option>
                                  <option defaultValue="042">042</option>
                                  <option defaultValue="043">043</option>
                                  <option defaultValue="051">051</option>
                                  <option defaultValue="044">044</option>
                                  <option defaultValue="052">052</option>
                                  <option defaultValue="053">053</option>
                                  <option defaultValue="054">054</option>
                                  <option defaultValue="055">055</option>
                                  <option defaultValue="061">061</option>
                                  <option defaultValue="062">062</option>
                                  <option defaultValue="063">063</option>
                                  <option defaultValue="064">064</option>
                                  <option defaultValue="070">070</option>
                                  <option defaultValue="080">080</option>
                                  <option defaultValue="0505">0505</option>
                                  <option defaultValue="0507">0507</option>
                                  <option defaultValue="010">010</option>
                                  <option defaultValue="011">011</option>
                                  <option defaultValue="016">016</option>
                                  <option defaultValue="017">017</option>
                                  <option defaultValue="018">018</option>
                                  <option defaultValue="019"></option>
                                </select>
                              </span>
                            </span>
                          </span>
                          <span className="inpbx">
                            <input
                              type="tel"
                              id="telNum2"
                              defaultValue=""
                              maxLength="8"
                              placeholder="전화번호(숫자만 입력)"
                              title="전화번호(숫자만 입력)"
                            />
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="zipcd">배송주소</label>
                      </span>
                      <div className="oi_cont">
                        <div className="oi_cblock oi_post_pd">
                          <div className="in_bwrap">
                            <span className="in_b">
                              <span className="inpbx">
                                <a href="#;" onClick={() => "searchZipcd()"}>
                                  <input
                                    type="text"
                                    name="zipcd"
                                    defaultValue=""
                                    title="우편번호 입력"
                                    // readonly="readonly"
                                  />
                                </a>
                              </span>
                            </span>
                          </div>
                          <a
                            href="#;"
                            onClick={() => "searchZipcd()"}
                            className="b_def3"
                          >
                            우편번호
                          </a>
                        </div>
                        <div className="addr_info" style={{ display: "none" }}>
                          <strong className="info_tit">도로명</strong>
                          <span id="roadNmAddr" className="info_cont">
                            도로명주소가 없거나 확인되지 않습니다.
                          </span>
                          <strong className="info_tit">지번</strong>
                          <span id="lotnoAddr" className="info_cont">
                            지번주소가 없거나 확인되지 않습니다
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="order_btnarea2 order_btnarea3">
                    <ul className="bnbox">
                      <li>
                        <a
                          href="#);"
                          onClick={() => "ShpplocForm.reset()"}
                          className="b_def"
                        >
                          초기화
                        </a>
                      </li>

                      <li>
                        <a
                          href="#;"
                          onClick={() => "ShpplocForm.list()"}
                          className="b_def"
                        >
                          취소
                        </a>
                      </li>

                      <li>
                        <a
                          href="#;"
                          onClick={() => "ShpplocForm.save()"}
                          className="b_def5"
                        >
                          등록
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlusShipContent;
