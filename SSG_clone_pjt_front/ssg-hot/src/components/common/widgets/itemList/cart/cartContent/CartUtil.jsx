import React from "react";
import { useRecoilState } from "recoil";
import { deleteCart, getMyCart } from "../../../../../../store/apis/cart";
import {
  cartPurchaseState,
  cartState,
} from "../../../../../../store/atom/cartState";

export default function CartUtil({ id, item }) {
  const [cartData, setCartData] = useRecoilState(cartState);
  const [cartPurchaseProductData, setCartPurchaseProductData] =
    useRecoilState(cartPurchaseState);

  const delCart = () => {
    if (window.confirm("해당 상품을 삭제하시겠습니까?")) {
      deleteCart(id).then((res) => {
        // console.log(res);
        alert("삭제되었습니다;");
        if (cartPurchaseProductData.includes(item)) {
          cartPurchaseProductData.map((data, idx) => {
            if (data.id == item.id) {
              var filterArr = cartPurchaseProductData.filter(function (data) {
                return data != item;
              });

              setCartPurchaseProductData(filterArr);
              return;
            }
          });
        }
        getMyCart().then((res) => {
          setCartData(res.data);
          // console.log("다시가져오기");
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
