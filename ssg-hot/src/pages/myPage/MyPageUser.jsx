import React, { useEffect, useState } from "react";
import { getUserDetail } from "../../store/apis/user";
import { useNavigate, Link } from "react-router-dom";
function MyPageUser() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetail().then((res) => {
      console.log(res);
      setUserData(res);
    });
  }, []);

  return (
    <div id="m_content" className="myssg_main react-area">
      <div className="myssg_user_sec" style={{ padding: "10px 20px 0px" }}>
        <div className="mc" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="//sui.ssgcdn.com/ui/m_ssg/img/@100x100.png"
            alt="프로필사진"
            id="talkImgMain"
            style={{ borderRadius: "50px", width: "50px", height: "50px" }}
          />
          <span className="myssg_profile_setting">
            <span className="blind">프로필편집</span>
          </span>
          <div className="myssg_profile_info" style={{ padding: "10px 20px" }}>
            <div className="myssg_user_name">
              <a
                href="#"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_회원명"
              >
                {userData.name} 님
              </a>
            </div>
            <div
              className="myssg_user_grade"
              data-react-unit-type="text"
              data-react-unit-id=""
              data-react-unit-text='[{"type":"tarea_addt_val","defaultValue": "FRIENDS"}]'
            >
              <a href="#" className="clickable">
                <p style={{ marginBottom: "0px" }}>
                  <strong className="myssg_primary_text">
                    {userData.memberLevel}
                  </strong>{" "}
                  등급입니다.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="myssg_membership_info"
        data-react-tarea-cd="00040_000000233"
      >
        <a href="#" className="clickable">
          <div className="myssg_membership_header">
            <div className="myssg_membership_header_title justify_center">
              <i className="badge">
                <span className="blind">스마일클럽</span>
              </i>
              <p>
                회원은, <strong>최대 10% 할인쿠폰</strong>
              </p>
            </div>
          </div>
          <div className="myssg_membership_content">
            <div className="myssg_membership_btn_join">
              <span className="myssg_membership_btn_content">
                지금 가입하시면 1개월 무료<i className="icon ty_xs"></i>
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className="myssg_user_manage">
        <Link to="/like">
          <span className="myssg_manage_text ty_like">좋아요</span>
        </Link>

        <button
          onClick={() => {
            navigate("/cartcontrol");
          }}
          className="clickable"
          data-react-tarea="MYSSG|M_MY_SSG_배송지관리"
        >
          <span className="myssg_manage_text ty_devliery">배송지 관리</span>
        </button>
        <a
          href="#"
          className="clickable"
          data-react-tarea="MYSSG|M_MY_SSG_PUSH메세지함"
        >
          <span className="myssg_manage_text ty_alert">
            {" "}
            알림함
            <span
              className="myssg_alert_count"
              style={{ display: "none" }}
              id="pushArea"
            >
              <span id="pushCountArea" className="blind">
                알림함 수
              </span>
              0
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default MyPageUser;
