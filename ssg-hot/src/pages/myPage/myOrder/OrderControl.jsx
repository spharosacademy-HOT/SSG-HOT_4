import React, { useEffect } from "react";
import { useState } from "react";
import CommonHeader from "../../../components/layout/header/CommonHeader.jsx";
import OrderDate from "./OrderDate.jsx";
import OrderFilter from "./OrderFilter.jsx";
import OrderFooter from "./OrderFooter.jsx";
import OrderList from "./OrderList.jsx";
import OrderReserve from "./OrderReserve.jsx";
import * as Api from "../../../store/apis/address";
import {
  getToken,
  isExistToken,
} from "../../../store/utils/useful-funtions.js";
import { Link, useNavigate } from "react-router-dom";
import OrderNone from "./OrderNone.jsx";

function OrderControl() {
  const navigate = useNavigate();
  const [orderValid, setOrderValid] = useState(false);
  const [products, setProducts] = useState([]);
  const getOrders = async () => {
    try {
      const getData = await Api.get("/orders/user");
      const getProducts = getData.data.data;
      if (!getProducts || !getData) {
        setOrderValid(false);
        throw new Error(`${getData.data.message}`);
      }
      setOrderValid(true);
      setProducts(getProducts);
    } catch (e) {
      setOrderValid(false);
      console.log(e);
    }
  };

  useEffect(() => {
    if (isExistToken()) {
      getOrders();
    }
  }, []);
  return (
    <>
      <CommonHeader title="나의주문내역" />

      <div id="m_content" className="codr_ct_clm">
        <OrderReserve />
        {/* <OrderDate /> */}
        {/* <OrderFilter /> */}
        {orderValid ? (
          products.map((pro) => {
            console.log(pro);
            return <OrderList key={pro.id} productList={pro} />;
          })
        ) : (
          <OrderNone />
        )}
      </div>

      <OrderFooter />
    </>
  );
}

export default OrderControl;
