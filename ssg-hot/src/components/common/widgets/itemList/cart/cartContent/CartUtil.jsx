import React from "react";
import { useRecoilState } from "recoil";
import { deleteCart, getMyCart } from "../../../../../../store/apis/cart";
import { cartState } from "../../../../../../store/atom/cartState";

export default function CartUtil({ id }) {
  const [cartData, setCartData] = useRecoilState(cartState);

  const delCart = () => {
    if (window.confirm("해당 상품을 삭제하시겠습니까?")) {
      deleteCart(id).then((res) => {
        console.log(res);
        alert("삭제되었습니다;");
        getMyCart().then((res) => {
          setCartData(res.data);
          console.log("다시가져오기");
        });
      });
    }
  };

  return (
    <div className="cartUtil">
      <button type="button">
        <i className="iconBtn pinBtn"></i>
      </button>
      <button type="button" onClick={delCart}>
        <i className="iconBtn delBtn"></i>
      </button>
    </div>
  );
}
