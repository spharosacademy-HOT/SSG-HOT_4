import React, { useEffect, useState } from "react";
import * as Api from "../../../store/apis/address";

export default function CartAddress() {
  const [changeExisted, setChangeExisted] = useState(0);
  const [addressList, setAddressList] = useState([]);

  const getAxiosAddress = async () => {
    try {
      const getData = await Api.get("/address/users");
      if (!getData) {
        throw new Error(`${getData} not allowd`);
      }

      console.log(getData.data.data);
      const getAddress = getData.data.data;
      setChangeExisted(getData.data.data.id);
      setAddressList([]);
      getAddress.forEach((address) => {
        console.log(address, "아");
        setAddressList((addressList) => [
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

  useEffect(() => {
    getAxiosAddress();
  }, []);

  const addressTitle = "자택";
  const addressSub = "기본배송지";
  const addressInfo = "[11111] 부산 남구  (문현동)";
  return (
    <div className="cartAddress">
      <div className="addressHeader">
        <div className="addressRow">
          <i className="icon addressSm locationIcon"></i>
          <h3 className="addressTit">{addressTitle}</h3>
          <span className="addressSubTit">{addressSub}</span>
        </div>
        <p className="addressInfo">{addressInfo}</p>
        <p></p>
      </div>
      <div className="addressContents">
        <div className="addressBtnArea">
          <button className="addressBtn">여러곳으로 한방에</button>
          <button className="addressBtn">배송지 변경</button>
        </div>
      </div>
    </div>
  );
}
