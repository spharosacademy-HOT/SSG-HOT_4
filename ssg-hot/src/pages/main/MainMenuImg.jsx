import React from "react";
import imgData from "../../datas/menuImg.json";
export default function MainMenuImg() {
  return (
    <div className="menuImgList">
      {imgData &&
        imgData.map((img) => (
          <div className="menuImg" key={img.id}>
            <img src={img.imgUrl} alt={img.name} />
          </div>
        ))}
    </div>
  );
}
