import React from "react";

export default function Cart2Footer() {
  return (
    <div className="cart2Footer">
      <div>
        <h3>장바구니 상품안내</h3>
      </div>
      <ul>
        <li>
          <p>장바구니에 담은 상품은 최대 150개까지 보관됩니다.</p>
        </li>
        <li>
          <p>
            상품 우측 상단의 핀셋 아이콘으로 '계속 담아두기'를 설정해 두시면
            시간이 지나도 상품이 삭제되지 않습니다.
          </p>
        </li>
      </ul>
    </div>
  );
}
