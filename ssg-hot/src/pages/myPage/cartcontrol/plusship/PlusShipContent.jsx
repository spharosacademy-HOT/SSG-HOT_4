import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { addAddress, get, patch, post } from "../../../../store/apis/address";
function PlusShipContent() {
  const phoneList = ["010", "011", "016", "017", "018", "019"];
  const homePhoneList = [
    "선택",
    "02",
    "031",
    "032",
    "033",
    "041",
    "042",
    "043",
    "051",
    "044",
    "052",
    "053",
    "054",
    "055",
    "061",
    "063",
    "064",
    "070",
    "080",
    "0505",
    "0507",
    "010",
    "011",
    "016",
    "017",
    "018",
  ];
  const [phoneSelected, setPhoneSelected] = useState("010");
  const [homeSelected, setHomeSelected] = useState("선택");
  const [inputs, setInputs] = useState({
    shpplocAntnmNm: "",
    rcptpeNm: "",
    phoneNum2: "",
    telNum2: "",
    zipcd: "",
    address: "",
    detailAddress: "",
  });
  const [addressValid, setAddressValid] = useState(false);
  const {
    shpplocAntnmNm,
    rcptpeNm,
    phoneNum2,
    telNum2,
    zipcd,
    address,
    detailAddress,
  } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const save = async (e) => {
    e.preventDefault();
    // if (shpplocAntnmNm === "") {
    //   alert("주소별칭입력 또는 선택해 주십시오.");
    //   return;
    // }
    // if (rcptpeNm === "") {
    //   alert("받는 분을 입력해 주세요.");
    //   return;
    // }
    // if (phoneNum2 === "") {
    //   alert("휴대폰 번호를 입력 해 주세요.");
    //   return;
    // }
    // if (isNaN(phoneNum2)) {
    //   alert("휴대폰 번호를 숫자로 입력해주세요.");
    //   return;
    // }
    // if (isNaN(telNum2)) {
    //   alert("전화번호를 숫자로 입력해주세요.");
    //   return;
    // }
    // if (phoneNum2.length < 7) {
    //   alert("휴대폰 번호는 최소 7자리 이상 8자리 이하로 입력해주세요.");

    //   return;
    // }
    // if (zipcd === "") {
    //   alert("우편번호 검색을 통해 배송주소를 입력 해 주세요.");
    //   return;
    // }
    console.log(localStorage.getItem("token"));
    let sendInfo = {
      alias: shpplocAntnmNm,
      taker: rcptpeNm,
      phone: phoneSelected + phoneNum2,
      homePhone: homeSelected + telNum2,
      city: address,
      street: detailAddress,
      zipcode: zipcd,
      existed: false,
    };

    // 1. 기존 배송지 있는지 확인
    const getAddressByUser = await get("/address/user/existed");
    // 2. 있을 경우
    if (!getAddressByUser.data.result) {
      sendInfo.existed = true;
      const result = await post("/address", sendInfo);
      alert("해당 배송지는 기존 배송지로 적용되었습니다.");
      return;
    }

    // 3. 없을경우
    if (
      window.confirm(
        `새 배송지가 등록되었습니다. 지금 등록한 배송지를 기본 배송지로 설정하겠습니까?`
      )
    ) {
      const result = await post("/address", sendInfo);
      console.log(result);
      const final = await patch("/address", result.data.id);
      console.log(final);

      return;
    }
  };

  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data) => {
    console.log(data);
    let fullAddress = {
      zipcode: data.zonecode,
      address: `${data.address} (${data.bname}, ${data.buildingName})`,
    };

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      zipcd: fullAddress.zipcode, // name 키를 가진 값을 value 로 설정
      address: fullAddress.address,
    });
    setAddressValid(true);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

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
                            maxLength="20"
                            onChange={onChange}
                            value={shpplocAntnmNm}
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
                            maxLength="20"
                            onChange={onChange}
                            value={rcptpeNm}
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
                                <select
                                  id="phoneNum1"
                                  title="휴대폰 앞자리"
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                    setPhoneSelected(e.target.value);
                                  }}
                                  value={phoneSelected}
                                >
                                  {phoneList.map((item) => (
                                    <option value={item} key={item}>
                                      {item}
                                    </option>
                                  ))}
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
                              maxLength="8"
                              onChange={onChange}
                              value={phoneNum2}
                              name="phoneNum2"
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
                                <select
                                  id="telNum1"
                                  title="전화번호 앞자리"
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                    setHomeSelected(e.target.value);
                                  }}
                                  value={homeSelected}
                                >
                                  {homePhoneList.map((item) => (
                                    <option value={item} key={item}>
                                      {item}
                                    </option>
                                  ))}
                                </select>
                              </span>
                            </span>
                          </span>
                          <span className="inpbx">
                            <input
                              type="tel"
                              id="telNum2"
                              maxLength="8"
                              placeholder="전화번호(숫자만 입력)"
                              title="전화번호(숫자만 입력)"
                              onChange={onChange}
                              value={telNum2}
                              name="telNum2"
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
                                <input
                                  type="text"
                                  name="zipcd"
                                  onClick={handleClick}
                                  title="우편번호 입력"
                                  onChange={onChange}
                                  value={zipcd}
                                />
                              </span>
                              {addressValid ? (
                                <span className="inpbx">
                                  <input
                                    type="text"
                                    name="detailAddress"
                                    placeholder="상세주소"
                                    title="우편번호 입력"
                                    onChange={onChange}
                                    value={detailAddress}
                                  />
                                </span>
                              ) : (
                                ""
                              )}
                            </span>
                          </div>
                          {addressValid ? (
                            <div className="addr_info">
                              <strong className="info_tit">도로명</strong>
                              <span id="roadNmAddr" className="info_cont">
                                {address}
                              </span>
                            </div>
                          ) : (
                            ""
                          )}

                          <button onClick={handleClick} className="b_def3">
                            우편번호
                          </button>
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
                        <button type="button" className="b_def5" onClick={save}>
                          등록
                        </button>
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
