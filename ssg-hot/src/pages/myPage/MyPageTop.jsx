import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { getMyCart } from "../../store/apis/cart";
import * as Api from "../../store/apis/address";
import { useRecoilState } from "recoil";
import { cartState } from "../../store/atom/cartState";
import { addressState } from "../../store/atom/addressState";
import { useState } from "react";

function MyPageTop() {
  const [cartData, setCartData] = useRecoilState(cartState);
  const [addressData, setAddressData] = useRecoilState(addressState);
  const [changeExisted, setChangeExisted] = useState(0);

  const navigate = useNavigate();

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
          navigate("/cart");
        });
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="mcom_tit_renew  react-area" style={{ height: "50px" }}>
      <h2
        className="mcom_tit_txt clickable"
        style={{ marginBottom: "0", fontSize: "16px" }}
      >
        MY SSG
      </h2>
      <div className="mcom_tit_lft">
        <div className="btn_back clickable">
          <span
            className="sp_ctg_icon ctg_icon_back"
            onClick={() => navigate(-1)}
          >
            <span className="blind">이전 페이지</span>
          </span>
        </div>
      </div>
      <div className="mcom_tit_rgt">
        <div className="btn_cate btn_cart">
          <button type="button" className="clickable" onClick={goCart}>
            <span className="sp_ctg_icon ctg_icon_cart">
              <span className="cmnoti_push">
                <span className="blind" id="topCartCnt">
                  담은 상품 수
                </span>
              </span>
            </span>
          </button>
        </div>
        <div className="btn_cate btn_home">
          <Link to="/">
            <span className="sp_ctg_icon ctg_icon_home">
              <span className="blind">홈</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyPageTop;
