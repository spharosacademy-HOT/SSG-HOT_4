import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getMyCart } from "../../../../../../store/apis/cart";
import { getOption1, putOption } from "../../../../../../store/apis/option";
import { purchaseProduct } from "../../../../../../store/apis/product";
import { addressState } from "../../../../../../store/atom/addressState";
import {
  cartOrderPriceState,
  cartPurchaseState,
  cartState,
} from "../../../../../../store/atom/cartState";
import { userState } from "../../../../../../store/atom/user";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
};

export default function CartButton({ optionList, productId, cartId, item }) {
  const [optionFirst, setOptionFirst] = useState(optionList.optionFirsts);
  const [optionSecond, setOptionSecond] = useState(optionList.optionSeconds);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const isOption = useState(optionFirst.length * optionSecond.length);
  const [cartData, setCartData] = useRecoilState(cartState);
  const deliveryData = useRecoilValue(addressState);
  const priceData = useRecoilValue(cartOrderPriceState);
  const userData = useRecoilValue(userState);
  const [cartPurchaseProductData, setCartPurchaseProductData] =
    useRecoilState(cartPurchaseState);

  const navigate = useNavigate();

  const purchaseData = {
    amountPaid:
      item.stock.product.discountPrice * item.count +
      item.stock.product.shippingFee,
    orderTotal: item.stock.product.discountPrice * item.count,
    deliveryPay: item.stock.product.shippingFee,
    deliveryTaker: deliveryData[0].taker,
    deliveryName: deliveryData[0].alias,
    deliveryPhone: deliveryData[0].phone,
    deliveryAddress: deliveryData[0].city,
    deliveryAddress2: deliveryData[0].street,
    deliveryZipcode: deliveryData[0].zipcode,
    deliveryInfo: "택배함에 넣어주세요",
    envoice: "송장번호",
    paymentOption: "카드",
    couponId: 1,
    orderInfo: "주문 시 결제수단으로 환불받기",
    orderName: userData.name,
    orderPhone: userData.phone,
    orderEmail: userData.email,
  };
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function afterOpenModal() {
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }

  // console.log(optionList);
  const handleSelect1 = (e) => {
    setOption1(e.target.value);
    getOption1(e.target.value, productId).then((res) => {
      // console.log(res.data, "1로2조회");
      setOptionSecond(res.data);
      setOption2(res.data[0].id);
    });
  };
  const handleSelect2 = (e) => {
    setOption2(e.target.value);
  };

  const handleOption = () => {
    const oData = {
      cartId: cartId,
      productId: productId,
      optionFirstId: option1,
      optionSecondId: option2,
    };

    putOption(oData).then((res) => {
      // console.log(res);

      alert(res.message);
      getMyCart().then((res) => {
        setCartData(res.data);
      });
      closeModal();
    });
  };
  const handlePurchase = () => {
    const product = {
      stockId: item.stock.id,
      stockCount: item.count,
      stockPrice: item.stock.product.discountPrice,
    };

    purchaseData.orderItems = [product];
    //console.log("보낼데이터", purchaseData);
    setCartPurchaseProductData([...cartPurchaseProductData, item]);
    purchaseProduct(purchaseData)
      .then((res) => {
        navigate(`/cart/purchase`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cartButton">
        {isOption[0] > 1 ? (
          <button type="button" onClick={openModal}>
            <span>옵션변경</span>
          </button>
        ) : (
          <></>
        )}
        <button type="button" onClick={handlePurchase}>
          <span>바로구매</span>
        </button>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "5px",
            }}
          >
            <div className="commonHeader">
              <h2>옵션변경</h2>
              <div>
                <button type="button" onClick={closeModal}>
                  X
                </button>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div>옵션1</div>
              <span>
                <select
                  style={{ width: "200px", height: "35px" }}
                  onChange={handleSelect1}
                >
                  {optionFirst &&
                    optionFirst.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                </select>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>옵션2</div>
              <span>
                <select
                  style={{ width: "200px", height: "35px" }}
                  onChange={handleSelect2}
                >
                  {optionSecond &&
                    optionSecond.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                </select>
              </span>
            </div>
          </div>
          <button
            type="button"
            className="mnodr_btn ty_point ty_m cartTracking"
            name="btOrdCheckbox"
            data-tracking-value="변경하기"
            onClick={handleOption}
          >
            <span className="mnodr_btn_tx">변경하기</span>
          </button>
        </Modal>
      </div>
    </>
  );
}
