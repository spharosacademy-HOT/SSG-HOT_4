import React, { useState } from "react";
import { basicApiClient } from "../../../../store/apis/apiClient";
import { useNavigate } from "react-router-dom";

function EmailInhtmlFor() {
  //유저정보
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const [pwConfirm, setPwConfirm] = useState("");

  //유효성검사변수
  const [emailTest, setEmailTest] = useState(false);
  const [pwTest, setPwTest] = useState(false);
  const [phoneTest, setPhoneTest] = useState(false);
  const [pwConfirmTest, setPwConfirmTest] = useState(false);
  const [emailChek, setEmailCheck] = useState(false);

  //라우터
  let navigate = useNavigate();

  //필수 체크
  const [checkInputs, setCheckInputs] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckInputs([...checkInputs, id]);
    } else {
      setCheckInputs(checkInputs.filter((el) => el !== id));
    }
  };

  const isCheckedAll = checkInputs.length == 3;
  const isDisabled = !isCheckedAll;

  const isAbled =
    !isDisabled &&
    emailChek &&
    phoneTest &&
    pwConfirmTest &&
    pwTest &&
    userInfo.name;

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    console.log(
      "이메일 유효성 검사",
      setEmailTest(regExp.test(e.target.value))
    );
    setUserInfo(() => ({
      ...userInfo,
      email: e.target.value,
    }));
  };

  // 이메일 중복체크 api
  const getCheckEmail = async () => {
    const res = await basicApiClient.post(`/auth/email`, {
      email: userInfo.email,
    });
    console.log(res);
    if (res.data.status == 200) {
      alert("사용가능한 이메일입니다.");
      setEmailCheck(true);
    } else {
      alert("이미 사용중인 이메일입니다.");
      setEmailCheck(false);
    }
  };

  // 비밀번호 유효성 검사
  const checkPassword = (e) => {
    var regExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,20}$/;
    console.log("비밀번호 유효성 검사", setPwTest(regExp.test(e.target.value)));
    setUserInfo(() => ({
      ...userInfo,
      password: e.target.value,
    }));
  };

  // 비밀번호 확인 검사
  const checkPasswordConfirm = (e) => {
    if (e.target.value === userInfo.password) {
      setPwConfirmTest(true);
    } else {
      setPwConfirmTest(false);
    }
    setPwConfirm(e.target.value);
  };

  //이름받아오기
  const setName = (e) => {
    setUserInfo(() => ({
      ...userInfo,
      name: e.target.value,
    }));
  };

  // 휴대폰 유효성 검사
  const checkPhone = (e) => {
    //'-'입력시
    var regExp = /(?:\d{3}|\d{4})-\d{4}$/;
    // 숫자만 입력시
    var regExp2 = /(?:\d{3}|\d{4})\d{4}$/;
    var test1 = regExp.test(e.target.value);
    var test2 = regExp2.test(e.target.value);
    setPhoneTest(test1 || test2);
    if (test1) {
      let tempPhone = e.target.value;
      tempPhone = tempPhone.split("-");
      tempPhone = tempPhone[0] + tempPhone[1];

      setUserInfo(() => ({
        ...userInfo,
        phone: tempPhone,
      }));
    } else {
      setUserInfo(() => ({
        ...userInfo,
        phone: e.target.value,
      }));
    }
    console.log("휴대폰 유효성 검사", test1 || test2);
  };

  //회원가입 api 요청
  const postSignUp = async () => {
    if (
      !isDisabled &&
      emailChek &&
      phoneTest &&
      pwConfirmTest &&
      pwTest &&
      userInfo.name
    ) {
      const res = await basicApiClient.post(`/auth`, userInfo);
      if (res.status == 200) {
        alert("회원가입에 성공하셨습니다.");
        navigate("/login");
      } else {
        alert("회원가입에 실패하셨습니다.");
        console.log(res);
      }
    } else {
      alert("입력을 확인해주세요");
    }
  };

  return (
    <>
      <div id="m_content" className="cmem_ct_join">
        <div className="cmem_card_tit">
          <h3>약관동의</h3>
        </div>
        <div className="cmem_cont">
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <input
                  type="checkbox"
                  id="ssgagree1"
                  className="checkbox"
                  data-terms="Y"
                  value="check1"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, e.currentTarget.id);
                  }}
                />
                <label htmlFor="ssgagree1" className="label_noraml">
                  (필수) SSG.COM 회원 이용약관
                </label>
              </span>
              <a
                href="https://member.ssg.com/policies/termsPopup.ssg?archive=ssg/20200228;"
                className="cmem_btn cmem_btn_blkline2"
                title="새창 열림"
              >
                내용보기
              </a>
            </div>
          </div>
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <input
                  type="checkbox"
                  id="ssgagree2"
                  className="checkbox"
                  data-terms="Y"
                  value="check2"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, e.currentTarget.id);
                  }}
                />
                <label htmlFor="ssgagree2" className="label_noraml">
                  (필수) SSG.COM 회원 개인정보 수집 및 이용 동의
                </label>
              </span>
              <a
                href="https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_email;"
                className="cmem_btn cmem_btn_blkline2"
                title="새창 열림"
              >
                내용보기
              </a>
            </div>
          </div>
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <input
                  type="checkbox"
                  id="age_up"
                  className="checkbox"
                  data-terms="Y"
                  value="check3"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, e.currentTarget.id);
                  }}
                />
                <label
                  type="checkbox"
                  htmlFor="chk_age_up"
                  className="label_noraml"
                >
                  (필수)
                  <em /> 만 14세 이상 회원입니다.{" "}
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="cmem_card_tit">
        <h3>회원정보</h3>
      </div>
      <div className="cmem_cont">
        <div className="cmem_row info">
          <dl className="cmem_ip">
            <dt>
              <span className="cmem_require">
                <span className="star" aria-hidden="true">
                  *
                </span>
                <label htmlFor="mbrLoginId">
                  <span className="blind">필수입력</span>
                </label>
              </span>
              아이디
            </dt>
            <dd>
              <div className="cmem_inpbtn_set">
                <span className="cmem_inp_txt">
                  <input
                    type="text"
                    id="mbrLoginId"
                    name="mbrLoginId"
                    title="이메일주소 입력"
                    className="input_text small"
                    maxLength="50"
                    placeholder="이메일주소 입력"
                    onBlur={checkEmail}
                  />
                  <span></span>
                </span>
                <button
                  type="button"
                  className="cmem_btn cmem_btn_gray3"
                  id="checkDuplicateLoginIdBtn"
                  onClick={getCheckEmail}
                >
                  중복확인
                </button>
                <input type="hidden" id="isDuplicateMbrLoginId" />
              </div>
              <span className="testText">
                {userInfo.email == "" || emailTest
                  ? ""
                  : "이메일 형식이 아닙니다."}
              </span>
            </dd>
          </dl>
        </div>
        <div className="cmem_row">
          <dl className="cmem_ip">
            <dt>
              <span className="cmem_require">
                <span className="star" aria-hidden="true">
                  *
                </span>
                <label htmlFor="pwdStr">
                  <span className="blind">필수입력</span>비밀번호
                </label>
              </span>
            </dt>
            <dd>
              <div className="cmem_inp_txt">
                <input
                  type="password"
                  id="pwdStr"
                  name="pwdStr"
                  placeholder="영문, 숫자, 특수문자 조합 8~20자리"
                  onBlur={checkPassword}
                />
                <button type="button" className="inp_clear">
                  <span className="cmem_ico_clear">
                    <span className="blind">입력내용 삭제</span>
                  </span>
                </button>
                <span className="cmem_ico_ok"></span>
              </div>
              <span className="testText">
                {userInfo.password == "" || pwTest
                  ? ""
                  : "8~20자 영문, 숫자, 특수문자 조합을 사용하세요."}
              </span>
              <div className="cmem_inp_txt">
                <input
                  type="password"
                  id="pwdStrConfirm"
                  name="pwdStrConfirm"
                  title="비밀번호 재확인"
                  placeholder="비밀번호 확인"
                  onBlur={checkPasswordConfirm}
                />
                <button type="button" className="inp_clear">
                  <span className="cmem_ico_clear">
                    <span className="blind">입력내용 삭제</span>
                  </span>
                </button>
                <span className="cmem_ico_ok"></span>
              </div>
              <span className="testText">
                {pwConfirm == "" || pwConfirmTest
                  ? ""
                  : "비밀번호가 일치하지 않습니다."}
              </span>
            </dd>
          </dl>
        </div>
        <div className="cmem_row">
          <dl className="cmem_ip">
            <dt>
              <span className="cmem_require">
                <span className="star" aria-hidden="true">
                  *
                </span>
                <label htmlFor="mbrNm">
                  <span className="blind">필수입력</span>이름
                </label>
              </span>
            </dt>
            <dd>
              <div className="cmem_inp_txt">
                <input type="text" id="mbrNm" name="mbrNm" onBlur={setName} />
              </div>
            </dd>
          </dl>
        </div>
        <div className="cmem_row">
          <div className="cmem_user_phone">
            <div className="cmem_ip">
              <dt>
                <span className="cmem_require">
                  <span className="star" aria-hidden="true">
                    *
                  </span>

                  <label htmlFor="mobileNoStr">휴대폰 번호</label>
                </span>
              </dt>

              <div className="phone_num">
                <div className="cmem_inp_grp">
                  <span className="cmem_inp_sel v2">
                    <select
                      id="mbrCntsano"
                      name="mbrCntsMobileDto.mbrCntsano"
                      title="휴대폰 번호 앞자리"
                    >
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                    <span className="sel_arr"></span>
                  </span>
                  <span className="space"></span>
                  <span className="cmem_inp_txt">
                    <input
                      type="tel"
                      id="mobileNoStr"
                      title="휴대폰 번호 뒷자리"
                      placeholder="휴대폰 뒷자리"
                      onBlur={checkPhone}
                    />
                  </span>
                </div>
              </div>
              <span className="testText">
                {userInfo.phone == "" || phoneTest
                  ? ""
                  : "정확한 휴대폰 번호를 입력해주세요."}
              </span>
              <div>
                <button
                  id="btnReqOtp"
                  type="button"
                  className="cmem_btn cmem_btn_gray3"
                  //   onClick={"reqOtp(); return false;"}
                  href="#;"
                  style={{ marginTop: "10px" }}
                >
                  인증번호 발송
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cmem_card_tit">
        <h3>광고 정보 수신 동의</h3>
      </div>
      <div className="cmem_cont">
        <div className="cmem_row">
          <div className="cmem_term_box">
            <span className="cmem_inp_chk">
              <input
                type="checkbox"
                id="infoRcvAgree"
                name="mbrAddtInfoAgreeDto.agreeYn"
                className="checkbox"
                value="Y"
              />
              <label htmlFor="infoRcvAgree">
                <strong>(선택)</strong> 서비스·이벤트 정보 제공을 위한 개인정보
                수집 및 이용 동의
              </label>
            </span>
            <a
              href="https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom02&t=simple#;"
              //   onClick={"window.open('/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom02&t=simple');return false;"}
              title="새창열림"
              className="cmem_btn cmem_btn_blkline2"
            >
              내용보기
            </a>
            <ul className="cmem_termlst">
              <li>
                <span className="cmem_inp_chk">
                  <input
                    type="checkbox"
                    id="email"
                    name="emailRcvYn"
                    value="Y"
                  />
                  <label htmlFor="email">이메일</label>
                </span>
              </li>
              <li>
                <span className="cmem_inp_chk">
                  <input type="checkbox" id="sms" name="smsRcvYn" value="Y" />
                  <label htmlFor="sms">문자</label>
                </span>
              </li>
            </ul>
            <p className="cmem_noti">
              <em>
                광고 정보 수신동의를 하시면 상품 및 이벤트 정보를 받으실 수
                있습니다.
              </em>
            </p>
          </div>
        </div>
        <div className="cmem_row">
          <p className="cmem_noti">
            <strong>
              선택 항목에 동의하지 않더라도 SSG.COM 회원가입 및 기본 서비스를
              이용하실 수 있습니다.
            </strong>
          </p>
        </div>
        <div className="cmem_btn_area">
          <button
            // isDisabled={!isAbled}
            className={
              isAbled ? "cmem_btn cmem_btn_orange2" : "cmem_btn isDisabled"
            }
            onClick={postSignUp}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
}

export default EmailInhtmlFor;
