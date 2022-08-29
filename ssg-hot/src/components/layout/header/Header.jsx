import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { getMyCart } from "../../../store/apis/cart";
import { cartState } from "../../../store/atom/cartState";

import HomeLogo from "../../common/ui/logo/HomeLogo";

export default function Header() {
  let pageUrl = useLocation();
  let params = useParams();
  const navigate = useNavigate();
  const [pagePath, setPagePath] = useState();
  const [cartData, setCartData] = useRecoilState(cartState);
  const cartSize = cartData.size;
  const goCart = () => {
    if (localStorage.getItem("token") !== null) {
      console.log(localStorage.getItem("token"));
      getMyCart().then((res) => {
        console.log("장바구니가져오기", res);
        setCartData(res.data);
        navigate("/cart");
      });
    }
  };

  useEffect(() => {
    setPagePath(pageUrl.pathname);
  }, [pageUrl]);
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
              >
                <span className="btn_label ty_off">
                  <span className="blind">몰 목록 펼치기</span>
                </span>
                <span className="btn_label ty_on">
                  <span className="blind">몰 목록 접기</span>
                </span>
              </button>
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
              {/* <Link to="/cart"> */}
              <span
                id="mHeaderCartBtn"
                className="gnb_util_mn ty_cart clickable"
                data-react-tarea="웹공통_N|GNB|장바구니"
                onClick={goCart}
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
              {/* </Link> */}
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
            </div>
          </div>
        </header>
      )}
    </>
  );
}
