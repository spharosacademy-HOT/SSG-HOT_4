import React, { useState } from "react";
import cartLogo2 from "../../assets/img/svg/cartLogo2.svg";
import searchIcon from "../../assets/img/svg/searchIcon.svg";
import Badge from "@mui/material/Badge";

import { Link, useNavigate } from "react-router-dom";
import { postRecentSearch } from "../../store/apis/recent";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartPurchaseState, cartState } from "../../store/atom/cartState";
import { addressState } from "../../store/atom/addressState";
import { getMyCart } from "../../store/apis/cart";
import * as Api from "../../store/apis/address";
export default function SearchHeader() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [cartData, setCartData] = useRecoilState(cartState);
  const [cartProductList, setCartProductList] =
    useRecoilState(cartPurchaseState);
  const [addressData, setAddressData] = useRecoilState(addressState);

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
      if (getAddress.length < 1) {
        alert("배송지를 추가해주세요");
        navigate("/cartcontrol");
        return;
      }
      getAddress.forEach((address) => {
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
    if (localStorage.getItem("token")) {
      getAxiosAddress().then((res) => {
        if (addressData.length > 0) {
          getMyCart().then((res) => {
            // console.log("장바구니가져오기", res);
            setCartData(res.data);
            setCartProductList([]);
            navigate("/cart");
          });
        }
      });
    } else {
      navigate("/login");
    }
  };
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === "") {
      alert("검색어를 입력해 주세요");
    } else {
      const recentData = {
        searchKeyword: search,
        userId: sessionStorage.getItem("id"),
      };
      if (localStorage.getItem("token") !== null) {
        postRecentSearch(recentData).then((res) => {
          console.log(res, "최근검색어 등록");
        });
      }
      navigate(`/search/${search}`);
    }
  };
  return (
    <form onSubmit={(e) => onSearch(e)} className="searchHeader">
      <div className="backBtn">
        <button type="button" onClick={() => navigate(-1)}></button>
      </div>

      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: "15px",
          padding: "6px",
          border: "none",
        }}
      />

      <button type="submit" style={{ color: "black" }}>
        <img src={searchIcon} alt="검색아이콘" />
      </button>
      <div onClick={goCart} style={{ color: "black", width: "60px" }}>
        <Badge badgeContent={cartData.length} color="primary">
          <img src={cartLogo2} alt="장바구니" />
        </Badge>
      </div>
    </form>
  );
}
