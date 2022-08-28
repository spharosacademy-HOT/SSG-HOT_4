import React, { useEffect, useState } from "react";

import * as Api from "../../../store/apis/address";
import Address from "./Address";
import CartControlFooter from "./CartControlFooter.jsx";
function CartControlContent() {
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
        console.log(address.id);
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

  const handleChange = (e) => {
    e.preventDefault();
    setChangeExisted(e.target.value);
  };
  const deleteHandle = async (e, id) => {
    e.preventDefault();

    if (window.confirm("선택한 주소를 삭제하시겠습니까?")) {
      try {
        const result = await Api.delete(`/address/${id}`);
        if (!result) {
          throw new Error("삭제를 하지 못하였습니다.");
        }
        alert("배송지가 삭제되었습니다.");
        setAddressList(addressList.filter((address) => address.id !== id));
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    }
  };
  const changeExistedHandle = async () => {
    console.log("test" + changeExisted);
    const sendInfo = {
      id: changeExisted,
    };
    try {
      const result = await Api.patch("/address", sendInfo);
      if (!result) {
        throw new Error("값을 수정하지 못하였습니다.");
      }

      alert("기본 배송지로 설정되었습니다.");
      getAxiosAddress();
      //window.location.reload();
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };
  return (
    <div>
      <div className="myodr_tab_cont">
        <div className="myodr_tab_panel" role="tabpanel">
          <ul className="myodr_tabrdo_lst">
            {addressList.map((address) => (
              <Address
                key={address.id}
                {...address}
                handleChange={handleChange}
                deleteHandle={deleteHandle}
              />
            ))}
          </ul>
          <button
            onClick={() => {
              addressList.map((addr) => console.log(addr.id));
            }}
          ></button>
        </div>
      </div>
      <CartControlFooter
        changeExisted={changeExisted}
        changeExistedHandle={changeExistedHandle}
      />
    </div>
  );
}

export default CartControlContent;
