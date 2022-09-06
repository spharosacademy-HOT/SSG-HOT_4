import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as Api from "../../../store/apis/address";
import Badge from "@mui/material/Badge";

import { useRecoilState, useRecoilValue } from "recoil";
import { getMyCart } from "../../../store/apis/cart";
import { addressState } from "../../../store/atom/addressState";
import { cartPurchaseState, cartState } from "../../../store/atom/cartState";

import HomeLogo from "../../common/ui/logo/HomeLogo";
import { getUserDetail } from "../../../store/apis/user";
import { userState } from "../../../store/atom/user";

export default function Header() {
  let pageUrl = useLocation();
  let params = useParams();
  const navigate = useNavigate();

  const [pagePath, setPagePath] = useState("");
  const [userData, setUserData] = useRecoilState(userState);
  const [cartData, setCartData] = useRecoilState(cartState);
  const [addressData, setAddressData] = useRecoilState(addressState);
  const [cartProductList, setCartProductList] =
    useRecoilState(cartPurchaseState);

  const cartSize = cartData.length;

  const [changeExisted, setChangeExisted] = useState(0);

  const getAxiosAddress = async () => {
    try {
      const getData = await Api.get("/address/users");
      if (!getData) {
        throw new Error(`${getData} not allowd`);
      }

      // console.log(getData.data.data);
      const getAddress = getData.data.data;
      setChangeExisted(getData.data.data.id);
      setAddressData([]);
      getAddress.forEach((address) => {
        // console.log(address, "주소~~~");
        setAddressData((addressList) => [
          ...addressList,
          {
            alias: address.alias,
            city: address.city,
            createdDate: address.createdDate,
            existed: address.existed,
            homePhone: address.homePhone,
            id: address.id,
            phone: address.phone,
            street: address.street,
            taker: address.taker,
            updatedDate: address.updatedDate,
            userId: address.userId,
            zipcode: address.zipcode,
          },
        ]);
      });
    } catch (e) {
      console.log("Error" + e);
    }
  };

  const goCart = () => {
    if (localStorage.getItem("token") !== null) {
      // console.log(localStorage.getItem("token"));
      getAxiosAddress().then((res) => {
        getMyCart().then((res) => {
          // console.log("장바구니가져오기", res);
          setCartData(res.data);
          setCartProductList([]);
          navigate("/cart");
        });
      });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    setPagePath(pageUrl.pathname);
  }, [pageUrl]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getMyCart().then((res) => {
        setCartData(res.data);
      });
    }
  }, []);
  useEffect(() => {
    getUserDetail().then((res) => {
      setUserData(res);
    });
  }, []);
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

          <div
            id="m_gnb"
            className="mcom_gnb v2"
            style={{ marginRight: "20px" }}
          >
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
                      <Link to="/mainsearch">
                        <div
                          className="gnb_search_inpbox_sbox"
                          style={{
                            backgroundColor: "#F5F5F5",
                            borderRadius: "10px",
                            padding: "3px",
                          }}
                        >
                          <input
                            type="search"
                            id="globalSearchInput"
                            className="gnb_search_inpbox_inp"
                            autoComplete="off"
                          />
                          <button
                            type="button"
                            id="globalSearchButton"
                            className="gnb_search_inpbox_src"
                          >
                            <i className="icon icon_search">
                              <span className="blind">검색</span>
                            </i>
                          </button>
                        </div>
                      </Link>
                    </div>
                  </form>
                </fieldset>
              </div>

              <span
                id="mHeaderCartBtn"
                className="gnb_util_mn ty_cart clickable"
                data-react-tarea="웹공통_N|GNB|장바구니"
                onClick={goCart}
              >
                {" "}
                <Badge badgeContent={cartSize} color="primary">
                  <i className="icon icon_cart">
                    <span id="mHeaderCartNm" className="blind">
                      장바구니
                    </span>
                  </i>
                </Badge>
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
