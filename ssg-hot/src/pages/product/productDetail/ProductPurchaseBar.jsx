import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import LikeButton from "../../../components/common/widgets/button/LikeButton";
import { addMyCart, getMyCart } from "../../../store/apis/cart";
import { cartState } from "../../../store/atom/cartState";
import { useParams } from "react-router-dom";

function ProductPurchaseBar() {
  let params = useParams();
  const id = params.productId;
  const [barState, setBarState] = useState(0);

  const [cartData, setCartData] = useRecoilState(cartState);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
    console.log(show);
  };
  const handlePresent = () => {
    setBarState(1);
  };
  const handlePurchase = () => {
    setBarState(2);
  };

  //장바구니 담고 장바구니 새로 가져오기
  const goCart = () => {
    const itemData = {
      stockId: id,
      count: 3,
    };
    addMyCart(itemData).then((res) => {
      console.log(res);
      alert(res.data.message);
      getMyCart().then((res) => {
        setCartData(res.data);
        console.log("다시가져오기");
      });
    });
  };
  return (
    <>
      {/* <CartModal isShow={show} /> */}
      <div
        className={
          barState === 0
            ? "product-purchase-bar"
            : // 'product-purchase-like'
            // 'product-purchase-buy'
            barState === 1
            ? "product-purchase-like"
            : "product-purchase-buy"
        }
      >
        <ul>
          <li className="product-choice">
            {/* 찜하기 컴포넌트 만들어서 넣기 */}
            <div>
              <LikeButton />
            </div>
          </li>
          <li className="product-present">
            <div onClick={handlePresent}>선물하기</div>
          </li>
          <li className="product-purchase">
            <div onClick={handlePurchase}>구매하기</div>
          </li>
          <li className="product-basket">
            <div onClick={goCart}>장바구니</div>
          </li>

          <li className="product-buy">
            <div>바로구매</div>
          </li>
        </ul>
        {/* <div className='option-box'>
                    <div>
                        닫기
                    </div>
                    <div>

                    </div>
                    <div>
                        총 합계 0 원
                    </div>
                </div> */}
      </div>
    </>
  );
}
export default ProductPurchaseBar;
