import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { getMyCart } from "../../../store/apis/cart";
import { cartState } from "../../../store/atom/cartState";

import HomeLogo from "../../common/ui/logo/HomeLogo";

export default function Header() {
  let pageUrl = useLocation();
  const [pagePath, setPagePath] = useState();
  const [cartData, setCartData] = useRecoilState(cartState);
  const cartSize = cartData.size;
  // const ACCESS_TOKEN = localStorage.getItem("token");

  useEffect(() => {
    setPagePath(pageUrl.pathname);

    // console.log(pageUrl.pathname);

    // console.log(cartSize, "카트사이즈");
  }, [pageUrl]);
  // const getCart = () => {
  //   if (ACCESS_TOKEN != null) {
  //     getMyCart().then((res) => {
  //       setCartData(res.data);
  //       console.log("!!!!!!!!!!!!!!", res.data);
  //     });
  //   }
  // };
  return (
    <>
      {pagePath === "/login" ? (
        ""
      ) : pagePath === "/recent" ? (
        ""
      ) : pagePath === "/mainsearch" ? (
        ""
      ) : pagePath === "/cart" ? (
        ""
      ) : pagePath === "/mypage" ? (
        ""
      ) : pagePath === "/signup" ? (
        ""
      ) : pagePath === "/emailsignup" ? (
        ""
      ) : pagePath === "/qna" ? (
        ""
      ) : pagePath === "/cartcontrol" ? (
        ""
      ) : pagePath === "/plusship" ? (
        ""
      ) : pagePath === "/like" ? (
        ""
      ) : (
        <header
          id="m_header"
          className="mcom_header react-area"
          style={{ position: "sticky", height: "60px", paddingTop: "10px" }}
        >
          <div id="m_header_banner" style={{ display: "none" }}></div>

          <div id="m_gnb" className="mcom_gnb v2">
            <div className="gnb_mall">
              <h1>
                <span className="gnb_mall_logo v3">
                  <HomeLogo />
                </span>
              </h1>
              <button
                className="gnb_mall_gate clickable"
                type="button"
                aria-expanded="false"
                // onclick="javascript:ssg_react.directCall({tarea: '웹공통_N|GNB|몰이동'});"
              >
                <span className="btn_label ty_off">
                  <span className="blind">몰 목록 펼치기</span>
                </span>
                <span className="btn_label ty_on">
                  <span className="blind">몰 목록 접기</span>
                </span>
              </button>
              <div className="gnb_mall_layer v2">
                <h2 className="gnb_mall_ssg">
                  <a
                    href="https://m.ssg.com"
                    className="gnb_mall_ssglnk clickable"
                    data-react-tarea="웹공통_N|GNB|SSG"
                    // onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                  >
                    <span className="blind">SSG.COM</span>
                  </a>
                </h2>
                <ul className="gnb_mall_lst">
                  <li>
                    <a
                      href="https://m-emart.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|이마트몰"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="em"></i>
                      </span>
                      <span className="gnb_mall_name">이마트몰</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com"
                      className="gnb_mall_lnk on clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|신세계몰"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="sm"></i>
                      </span>
                      <span className="gnb_mall_name">신세계몰</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-traders.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|트레이더스"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="tr"></i>
                      </span>
                      <span className="gnb_mall_name">트레이더스</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/dept/main.ssg"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|신세계백화점"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="sd"></i>
                      </span>
                      <span className="gnb_mall_name">신세계백화점</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-earlymorning.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|새벽배송"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mnmorning"></i>
                      </span>
                      <span className="gnb_mall_name">새벽배송</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-casamia.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|까사미아"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mncasamia"></i>
                      </span>
                      <span className="gnb_mall_name">까사미아</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-starbucks.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|STARBUCKS"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mnstarbucks"></i>
                      </span>
                      <span className="gnb_mall_name">STARBUCKS</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-chicor.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|CHICOR"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mnchicor"></i>
                      </span>
                      <span className="gnb_mall_name">CHICOR</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-tv.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|신세계TV쇼핑"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="tv"></i>
                      </span>
                      <span className="gnb_mall_name">신세계TV쇼핑</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-triip.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|여행"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mntrip"></i>
                      </span>
                      <span className="gnb_mall_name">여행</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-sivillage.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|S.I.VILLAGE"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="si"></i>
                      </span>
                      <span className="gnb_mall_name">S.I.VILLAGE</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-starfield.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|스타필드"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="sf"></i>
                      </span>
                      <span className="gnb_mall_name">스타필드</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-premiumoutlets.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|프리미엄아울렛"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="outlet"></i>
                      </span>
                      <span className="gnb_mall_name">프리미엄아울렛</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/specialStore/amorepacific-premium/main.ssg"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰탭광고_클릭"
                      //   onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','Y',365);"
                    >
                      <span className="gnb_mall_thumb">
                        <img
                          className="ssg_lazy"
                          src="//sstatic.ssgcdn.com/cmpt/gnb/202208/0000000050_2022081214170278436844547684_517.png"
                          data-src="//sstatic.ssgcdn.com/cmpt/gnb/202208/0000000050_2022081214170278436844547684_517.png"
                          alt="아이오페"
                          data-ll-status="observed"
                        />
                      </span>
                      <span className="gnb_mall_name">아이오페</span>
                      <span className="gnb_mall_bedge ty_ad">AD</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="gnb_util">
              <div className="gnb_util_search">
                <fieldset>
                  <form id="m_sch_bottom_form">
                    <div className="gnb_search_inpbox">
                      <div className="gnb_search_inpbox_sbox">
                        <input
                          type="search"
                          id="globalSearchInput"
                          className="gnb_search_inpbox_inp"
                          autoComplete="off"
                        />
                        <Link to="/mainsearch">
                          <button
                            type="button"
                            id="globalSearchButton"
                            className="gnb_search_inpbox_src"
                          >
                            <i className="icon icon_search">
                              <span className="blind">검색</span>
                            </i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </fieldset>
              </div>
              <Link to="/cart">
                <span
                  id="mHeaderCartBtn"
                  // href=""
                  className="gnb_util_mn ty_cart clickable"
                  data-react-tarea="웹공통_N|GNB|장바구니"
                  // onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                >
                  <i className="icon icon_cart">
                    <span id="mHeaderCartNm" className="blind">
                      장바구니
                    </span>
                  </i>
                  <span
                    className="cmnoti_cartshare"
                    id="cmnoti_cartshare"
                    style={{ display: "none" }}
                  >
                    <span className="blind">함께 장보기</span>
                  </span>{" "}
                  <span className="cmnoti_push" id="cartCnt_header">
                    <span className="blind" id="cartCntSpan">
                      담은 상품 수
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="cgsearch cgsearch_v3">
            <div className="cgsearch_cover" id="m_sch_top">
              <div className="cgsearch_inpbox_wrap">
                <div className="cgsearch_inpbox_back">
                  <button type="button">
                    <span className="blind">이전으로</span>
                  </button>
                </div>
                <div className="cgsearch_inpbox">
                  <div className="cgsearch_inpbox_sbox">
                    <input
                      id="query"
                      name="query"
                      type="text"
                      placeholder="검색어를 입력하세요."
                      autoComplete="off"
                      className="cgsearch_inpbox_inp"
                    />
                    <input type="hidden" id="query_sub" />
                    <input type="hidden" id="srch_site_no" />
                    <input type="hidden" id="select_site_no" />
                    <input type="hidden" id="srch_header_type" />
                    <input type="hidden" id="isSpcShopSrchYn" />
                    <input type="hidden" id="specialShopId" />
                    <input type="hidden" id="isModuleSrchYn" />
                    <input type="hidden" id="modulePropId" />
                    <input
                      type="hidden"
                      id="skipHeaderTopYn"
                      name="skipHeaderTopYn"
                    />
                    <button
                      type="button"
                      className="cgsearch_inpbox_src"
                      id="cgsearch_src"
                    >
                      <span className="blind">검색</span>
                    </button>
                    <button
                      type="button"
                      className="cgsearch_inpbox_del"
                      id="cgsearch_del"
                      style={{ display: "none" }}
                    >
                      <span className="blind">검색</span>
                    </button>
                  </div>
                </div>

                <div className="cgsearch_inpbox_util">
                  <a
                    id="mHeaderCartBtn_search"
                    // href="javascript:mobileCommonFn.goCartViewPage('https://pay.ssg.com/m/cart/dmsShpp.ssg')"
                    className="cgsearch_util_mn ty_cart"
                  >
                    <i className="icon icon_cart">
                      <span id="mHeaderCartNm_search" className="blind">
                        장바구니
                      </span>
                    </i>
                    <Badge bg="secondary">{cartSize}</Badge>
                    <span
                      className="cmnoti_cartshare"
                      id="cmnoti_cartshare_search"
                      style={{ display: "none" }}
                    >
                      <span className="blind">함께 장보기</span>
                    </span>
                    <span className="cmnoti_push" id="cartCnt_search">
                      <span className="blind" id="searchCartCntSpan">
                        담은 상품 수
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="cgsearch_cover_autocomp" id="m_srh2">
                <div className="cgsearch_cover_short" id="ac_short_list"></div>
                <div className="cgsearch_cover_recomm">
                  <ul className="cgsearch_recomm_keylist" id="ac_kwd_list"></ul>
                </div>
              </div>

              <div className="cgsearch_recomm_keyword" id="m_srh1">
                <div
                  className="cgsearch_none_result"
                  id="mbr_kwd_alert_nolist"
                  style={{ display: "none" }}
                >
                  <p>최근검색어가 없습니다</p>
                </div>
                <div className="cgsearch_latest_keyword" id="mbr_kwd_alert_all">
                  <h3 className="cgsearch_latest_title">최근검색어</h3>
                  <ul className="cgsearch_latest_keylst" id="mbr_kwd_list"></ul>
                  <button
                    type="button"
                    className="cgsearch_delete_all"
                    data-value="mbr"
                  >
                    검색어 전체 삭제
                  </button>
                </div>

                <div className="cgsearch_recomm_tag" id="now_hot_all">
                  <h3 className="cgsearch_recomm_title">추천태그</h3>
                  <div className="cgsearch_recomm_container">
                    <ul className="cgsearch_recomm_lst" id="now_hot_list"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
