import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommonHeader from "../../../components/layout/header/CommonHeader";
import * as Api from "../../../store/apis/address";
import {
  getCurrentDate,
  isExistToken,
} from "../../../store/utils/useful-funtions";
import OrderDetail from "./OrderDetail";
import OrderFinalAccount from "./OrderFinalAcoount";
import OrderFinalAddress from "./OrderFinalAddress";
import OrderFinalCancel from "./OrderFinalCancel";
import OrderFinalProduct from "./OrderFinalProduct";
import OrderFinalUser from "./OrderFinalUser";

function OrderFinalDetail() {
  const [order, setOrder] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const location = useLocation();
  const getOrder = async () => {
    try {
      const getData = await Api.get(`/orders/user/detail/${location.state}`);
      const getProducts = getData.data.data;
      console.log(getData);
      if (!getProducts || !getData) {
        throw new Error(`${getData.data.message}`);
      }
      setOrder(getProducts);
      setOrderList(getProducts.orderItems);
    } catch (e) {
      //   setOrderValid(false);
      console.log(e);
    }
  };
  useEffect(() => {
    if (isExistToken() && location) {
      getOrder();
    }
  }, []);

  return (
    <>
      <CommonHeader title="나의주문상세내역" />
      <OrderFinalAddress order={order} />
      <OrderFinalAccount order={order} />
      <OrderFinalUser order={order} />
      <OrderFinalProduct order={order} />
      <OrderFinalCancel order={order} />
    </>
  );
}
export default OrderFinalDetail;
