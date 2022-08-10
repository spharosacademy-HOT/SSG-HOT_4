import React from "react";

function SliderItem({ img, alt }) {
  return (
    <div>
      <img src={img} alt={alt} />
    </div>
  );
}

export default SliderItem;
