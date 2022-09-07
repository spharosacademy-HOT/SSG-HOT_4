import React from "react";
import CommonHeader from "../../../../components/layout/header/CommonHeader.jsx";
import PlusShipContent from "./PlusShipContent.jsx";
import { useLocation } from "react-router-dom";
function PlusShip() {
  const location = useLocation();

  return (
    <>
      <CommonHeader
        title={`배송지 ${
          location.state !== null ? location.state.state : "추가"
        } `}
      />
      <PlusShipContent
        sendState={location.state !== null ? location.state.state : "추가"}
        sendAddressInfo={
          location.state !== null ? location.state.addressInfo : ""
        }
      />
    </>
  );
}

export default PlusShip;
