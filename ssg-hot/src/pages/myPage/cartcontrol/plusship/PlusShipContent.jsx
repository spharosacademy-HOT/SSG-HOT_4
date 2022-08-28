import React, { useState, useRef, useEffect } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import { get, patch, post, put } from "../../../../store/apis/address";
import { phoneList, homePhoneList } from "./phoneList";

function PlusShipContent({ sendState, sendAddressInfo }) {
  const navigate = useNavigate();
  const [phoneSelected, setPhoneSelected] = useState("010");
  const [homeSelected, setHomeSelected] = useState("선택");
  const [inputs, setInputs] = useState({
    shpplocAntnmNm: "",
    rcptpeNm: "",
    phoneNum2: "",
    telNum2: "",
    detailAddress: "",
  });

  const [addressValid, setAddressValid] = useState(false);

  const [addr, setAddr] = useState({
    loadname1: "",
    loadname2: "",
    jibun: "",
    zipcd: "",
  });
  // focust 관리
  const inputRef = useRef([]);

  const { shpplocAntnmNm, rcptpeNm, phoneNum2, telNum2, detailAddress } =
    inputs;
  const { loadname1, loadname2, jibun, zipcd } = addr;

  const getAxiosAddress = async () => {
    if (sendState === "수정") {
      const {
        alias,
        city,
        homePhone,
        id,
        phone,
        street,
        taker,
        userId,
        zipcode,
      } = sendAddressInfo;
      setInputs({
        shpplocAntnmNm: alias,
        telNum2: homePhone.slice(3),
        phoneNum2: phone.slice(3),
        rcptpeNm: taker,
        detailAddress: city.split(",")[1].split("(")[0].slice(1, -1),
      });
      console.log(street.replace(detailAddress, ""));
      setAddr({
        loadname1: `${city.split(",")[0]},`,
        jibun: street.replace(detailAddress, ""),
        zipcd: zipcode,
        loadname2: `(${city.split("(")[1]}`,
      });
      setAddressValid(true);
    }
  };

  useEffect(() => {
    getAxiosAddress();
  }, []);

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const initialization = () => {
    setInputs({
      ...inputs,
      shpplocAntnmNm: "",
      rcptpeNm: "",
      phoneNum2: "",
      telNum2: "",
      detailAddress: "",
    });
    setAddr({
      jibun: "",
      zipcd: "",
      loadname1: "",
      loadname2: "",
    });
    setPhoneSelected("010");
    setHomeSelected("선택");
    setAddressValid(false);
  };

  const save = async (e) => {
    e.preventDefault();
    if (shpplocAntnmNm === "") {
      alert("주소별칭입력 또는 선택해 주십시오.");
      inputRef.current[0].focus();
      return;
    }
    if (rcptpeNm === "") {
      alert("받는 분을 입력해 주세요.");
      inputRef.current[1].focus();
      return;
    }
    if (phoneNum2 === "") {
      alert("휴대폰 번호를 입력 해 주세요.");
      inputRef.current[2].focus();
      return;
    }
    if (isNaN(phoneNum2)) {
      alert("휴대폰 번호를 숫자로 입력해주세요.");
      inputRef.current[2].focus();
      return;
    }
    if (isNaN(telNum2)) {
      alert("전화번호를 숫자로 입력해주세요.");
      inputRef.current[3].focus();
      return;
    }
    if (phoneNum2.length < 7) {
      alert("휴대폰 번호는 최소 7자리 이상 8자리 이하로 입력해주세요.");
      inputRef.current[2].focus();
      return;
    }
    if (zipcd === "") {
      alert("우편번호 검색을 통해 배송주소를 입력 해 주세요.");
      inputRef.current[4].focus();
      return;
    }
    if (detailAddress === "") {
      alert("상세주소를 입력하세요.");
      inputRef.current[5].focus();
      return;
    }

    let sendInfo = {
      alias: shpplocAntnmNm,
      taker: rcptpeNm,
      phone: phoneSelected + phoneNum2,
      homePhone: homeSelected === "선택" ? "" : homeSelected + telNum2,
      city: `${loadname1} ${
        detailAddress === 1 ? "" : detailAddress
      } ${loadname2}`,
      street: `${jibun} ${detailAddress === 1 ? "" : detailAddress}`,
      zipcode: zipcd,
      existed: false,
    };
    if (sendState === "수정") {
      sendInfo.id = sendAddressInfo.id;
      try {
        const result = await put("/address", sendInfo);
        alert("배송지 수정이 완료되었습니다.");
        navigate(-1);
        return;
      } catch (e) {
        throw new Error(`Error: ${e}`);
      }
    }
    try {
      // 1. 기존 배송지 있는지 확인
      const getAddressByUser = await get("/address/user/existed");
      if (!getAddressByUser) throw new Error("Not found getAddressByUser");
      if (!getAddressByUser.data.result) {
        sendInfo.existed = true;
        const resultAddress = await post("/address", sendInfo);
        if (!resultAddress) throw new Error("Not found resultAddress");
        alert("해당 배송지는 기존 배송지로 적용되었습니다.");
        navigate(-1);
        return;
      }

      // // 3. 없을경우

      const result = await post("/address", sendInfo);
      if (!result) throw new Error("Not found result");
      if (
        window.confirm(
          `새 배송지가 등록되었습니다. 지금 등록한 배송지를 기본 배송지로 설정하겠습니까?`
        )
      ) {
        const changeNewAddress = {
          id: result.data.id,
        };
        const changeResult = await patch("/address", changeNewAddress);
        if (!changeResult) throw new Error("Not found changeResult");
      }

      navigate(-1);
      return;
    } catch (e) {
      console.log("Error:" + e);
    }
  };

  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data) => {
    console.log(data);

    setAddr({
      ...addr,
      loadname1: `${data.address},`,
      loadname2: `(${data.bname}, ${data.buildingName})`,
      jibun: `${data.jibunAddress} ${data.buildingName}`,
      zipcd: data.zonecode,
    });
    setInputs({
      ...inputs,
      detailAddress: "",
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
                            ref={(el) => (inputRef.current[0] = el)}
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
                            ref={(el) => (inputRef.current[1] = el)}
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
                          <span className="p_first ">
                            <span className="des_select2">
                              <div className="cc_ellip_in2 selected">
                                {phoneSelected}
                              </div>
                              <span className="sp_com sel_arrow">&nbsp;</span>
                              <span className="hide_select2">
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
                              ref={(el) => (inputRef.current[2] = el)}
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
                            <span className="des_select2">
                              <span className="cc_ellip_in2">
                                {homeSelected}
                              </span>
                              <span className="sp_com sel_arrow">&nbsp;</span>
                              <span className="hide_select2">
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
                              ref={(el) => (inputRef.current[3] = el)}
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
                                  ref={(el) => (inputRef.current[4] = el)}
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
                                    ref={(el) => (inputRef.current[5] = el)}
                                  />
                                </span>
                              ) : (
                                ""
                              )}
                            </span>
                          </div>

                          <div>
                            {addressValid && loadname1 !== "" ? (
                              <div className="addr_info">
                                <strong className="info_tit">도로명</strong>
                                <span id="roadNmAddr" className="info_cont">
                                  {`${loadname1} ${detailAddress} ${loadname2}`}
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                            {addressValid && jibun !== "" ? (
                              <div className="addr_info">
                                <strong className="info_tit">지번</strong>
                                <span id="roadNmAddr" className="info_cont">
                                  {`${jibun} ${detailAddress}`}
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

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
                        <button onClick={initialization} className="b_def">
                          초기화
                        </button>
                      </li>

                      <li>
                        <button
                          type="button"
                          onClick={() => navigate(-1)}
                          className="b_def"
                        >
                          취소
                        </button>
                      </li>

                      <li>
                        <button type="button" className="b_def5" onClick={save}>
                          {sendState === "수정" ? "수정완료" : "등록"}
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
