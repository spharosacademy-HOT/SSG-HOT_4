import React from "react";

function MyPageLink() {
  return (
    <div>
      <div style={{ margin: "1rem" }}>
        <div className="myssg_manage_conts">
          <h3 className="myssg_manage_title">나의 주문관리</h3>
          <ul className="myssg_manage_list">
            <li>
              <a
                href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_주문배송조회"
              >
                주문/배송조회
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/productMng/purchaseList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_온라인매장구매내역"
              >
                구매 내역
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/productMng/frequentlyOrderItem.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_자주구매상품"
              >
                자주구매 상품
              </a>
            </li>
            <li>
              <a
                href="https://pay.ssg.com/m/myssg/productMng/perdcShppMain.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_정기배송설정관리"
              >
                정기배송 설정 관리
              </a>
            </li>
            <li>
              <a
                href="https://m-triip.ssg.com/m/trip/myssg/tripRsvtInfo.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_항공권예약조회"
              >
                항공권 예약조회
              </a>
            </li>
            <li>
              <a
                href="https://m-triip.ssg.com/hotel/myssg/rsvtList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_호텔예약조회"
              >
                호텔 예약조회
              </a>
            </li>
          </ul>
        </div>
        <div className="myssg_manage_conts">
          <h3 className="myssg_manage_title">나의 혜택 관리</h3>
          <ul className="myssg_manage_list">
            <li>
              <a
                href="https://m.ssg.com/myssg/moneyMng/memberCpnOwnList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_쿠폰"
              >
                쿠폰
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList&_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_SSGMONEY"
              >
                SSG MONEY
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/moneyMng/spointMain.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_신세계포인트"
              >
                신세계포인트
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/moneyMng/pinmoneySavedMain.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_국민용돈"
              >
                국민용돈
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/myssg/myinfoMng/manageBenefit.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_맘키즈클럽관리"
              >
                맘키즈 클럽 관리
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/moneyMng/ssgVoucherSavedMain.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_SSG VOUCHER"
              >
                SSG VOUCHER
              </a>
            </li>
          </ul>
        </div>
        <div className="myssg_manage_conts">
          <h3 className="myssg_manage_title">나의 활동관리</h3>
          <ul className="myssg_manage_list">
            <li>
              <a
                href="https://m.ssg.com/myssg/myClip/main.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_MY클립"
              >
                좋아요
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/activityMng/pdtEvalList.ssg?_mpop=new&quick=pdtEvalList&tabDiv=item"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_내상품평"
              >
                마이리뷰
              </a>
            </li>
            <li>
              <a
                href="https://pay.ssg.com/m/myssg/orderInfoCoolerBagInfo.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_새벽배송알비백관리"
              >
                새벽배송 알비백 관리
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/activityMng/stampList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_스탬프내역"
              >
                스탬프 내역
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/activityMng/eventEntryStatusList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_이벤트참여현황"
              >
                이벤트 참여현황
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/activityMng/counselList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_EMAIL답변확인"
              >
                e-mail 답변확인
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/activityMng/postngQna.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_상품Q&A"
              >
                상품 Q&amp;A
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/activityMng/itemNotiList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_입고알림내역"
              >
                입고알림내역
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/activityMng/urrEncoreList?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_우르르앵콜내역"
              >
                우르르 앵콜내역
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/activityMng/eventNotiList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_행사알림내역"
              >
                행사알림내역
              </a>
            </li>
          </ul>
        </div>
        <div className="myssg_manage_conts">
          <h3 className="myssg_manage_title">나의 선물함</h3>
          <ul className="myssg_manage_list">
            <li>
              <a
                href="https://m.ssg.com/myssg/gift/recvList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_받은선물"
              >
                받은선물
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/gift/sendList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_보낸선물"
              >
                보낸선물
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/gift/history.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_히스토리"
              >
                히스토리
              </a>
            </li>
          </ul>
        </div>
        <div className="myssg_manage_conts">
          <h3 className="myssg_manage_title">나의 정보관리</h3>
          <ul className="myssg_manage_list">
            <li>
              <a
                href="https://member.ssg.com/m/myssg/myinfoMng/password.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_회원정보변경"
              >
                회원정보 변경
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/myssg/myinfoMng/changePwd.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_비밀번호변경"
              >
                비밀번호 변경
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/comm/shpplocList.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_배송지관리"
              >
                배송지 관리
              </a>
            </li>
            <li>
              <a
                href="https://pay.ssg.com/m/myssg/PaymtMeansMng.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_결제수단관리"
              >
                결제수단 관리
              </a>
            </li>
            <li>
              <a
                href="https://m.ssg.com/myssg/myClip/sizeSetup.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_신발사이즈설정"
              >
                신발 사이즈 설정
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/member/infoRcvAgree.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_이메일문자수신동의"
              >
                이메일/문자 수신 동의
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/myssg/myinfoMng/infoUtlAgree.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_개인정보제3자제공동의"
              >
                개인정보 제3자 제공 동의
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/myssg/alln/membership.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_제휴멤버십관리"
              >
                제휴 멤버십 관리
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/myssg/myinfoMng/manageLoginInfo.ssg?_mpop=new"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_자동로그인 관리"
                className="clickable"
              >
                로그인 정보 관리
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/myssg/myinfoMng/main.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_SNS연결설정"
              >
                SNS 연결 설정
              </a>
            </li>
            <li>
              <a
                href="https://member.ssg.com/m/myssg/myinfoMng/withdrawMember.ssg?_mpop=new"
                className="clickable"
                data-react-tarea="MYSSG|M_MY_SSG_카테고리_회원탈퇴"
              >
                회원 탈퇴
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="myssg_banner ty_img">
        <a
          href="https://m.ssg.com/event/eventDetail.ssg?promId=1100394343"
          className="myssg_banner_link"
        >
          <img
            src="//sui.ssgcdn.com/ui/m_ssg/img/common/banner_omni_agree.jpg"
            alt="자주구매 / FOR YOU / 맘키즈 / VIP 혜택을 받는 가장 빠른 방법 옴니서비스 동의하러가기"
          />
        </a>
      </div>
    </div>
  );
}

export default MyPageLink;
