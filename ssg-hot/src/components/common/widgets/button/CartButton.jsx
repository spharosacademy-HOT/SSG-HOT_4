import React from "react";
import recentCartLogo from "../../../../assets/img/svg/recentCartLogo.svg";

export default function CartButton({handleCartAdd}) {
 
  return (
    <div className="recentCartBtn" onClick={handleCartAdd}>
      <img src={recentCartLogo} alt="" />
    </div>
  );
}
