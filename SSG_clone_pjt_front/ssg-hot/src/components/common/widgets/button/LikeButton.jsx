import React from "react";
import heartLogo from "../../../../assets/img/svg/noHeartLogo.svg";
import fillHeartLogo from "../../../../assets/img/svg/fillHeartLogo.svg";
export default function LikeButton({ isLike, setIsLike }) {
  const handleLike = () => {
    setIsLike(!isLike);
  };
  return (
    <div className="likeBtn">
      {isLike ? (
        <img src={fillHeartLogo} alt="찜버튼" onClick={handleLike} />
      ) : (
        <img src={heartLogo} alt="찜버튼" onClick={handleLike} />
      )}
    </div>
  );
}
