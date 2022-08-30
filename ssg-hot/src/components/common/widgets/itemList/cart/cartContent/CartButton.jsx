import React, { useState } from "react";
import Modal from "react-modal";

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
export default function CartButton({ optionList }) {
  const [selected1, setSelected1] = useState();
  const [selected2, setSelected2] = useState();
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
  const handleSelect = (e) => {
    e.preventDefault();
    setSelected1(e.target.value);
    console.log(e.target.value);
  };
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
                  value={selected1}
                  onChange={handleSelect}
                >
                  {optionList.optionFirsts &&
                    optionList.optionFirsts.map((option) => (
                      <option
                        value={option.name}
                        // onClick={console.log("눌림", option.name)}
                      >
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
                  value={selected2}
                  onChange={handleSelect}
                >
                  {optionList.optionSeconds &&
                    optionList.optionSeconds.map((option) => (
                      <option
                        value={option.name}
                        // onClick={console.log("눌림", option.name)}
                      >
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
            <span className="mnodr_btn_tx">변경하기</span>
          </button>
        </Modal>
      </div>
    </>
  );
}
