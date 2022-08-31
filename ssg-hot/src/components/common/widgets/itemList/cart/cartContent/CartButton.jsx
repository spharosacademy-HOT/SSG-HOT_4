import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import {
  getOption1,
  getOption2,
  putOption,
} from "../../../../../../store/apis/option";

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
Modal.setAppElement("#root");

export default function CartButton({ optionList, productId, cartId }) {
  const [optionFirst, setOptionFirst] = useState(optionList.optionFirsts);
  const [optionSecond, setOptionSecond] = useState(optionList.optionSeconds);
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();

  const [cartData, setCartData] = useRecoilState();

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

  console.log(optionList);
  const handleSelect1 = (e) => {
    setOption1(e.target.value);
    getOption1(e.target.value, productId).then((res) => {
      console.log(res.data, "1로2조회");
      setOptionSecond(res.data);
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
      console.log(res);
      alert(res.message);
      closeModal();
    });
  };
  // console.log(optionSecond);

  return (
    <>
      <div className="cartButton">
        {optionList ? (
          <button type="button" onClick={openModal}>
            <span>옵션변경</span>
          </button>
        ) : (
          <></>
        )}
        <button type="button">
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
                      <option key={option.stockId} value={option.id}>
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
                      <option key={option.stockId} value={option.id}>
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
            data-prom-yn=""
            data-tracking-cd="00044_000000094_t00060"
            data-tracking-value="변경하기"
          >
            <span className="mnodr_btn_tx" onClick={handleOption}>
              변경하기
            </span>
          </button>
        </Modal>
      </div>
    </>
  );
}
