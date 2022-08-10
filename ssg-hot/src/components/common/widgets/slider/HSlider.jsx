import React from "react";
import Slider from "react-slick";
import sliderData from "../../../../datas/js/sliderData";
import SliderItem from "./SliderItem";

export default function HSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {sliderData &&
          sliderData.map((item) => (
            <SliderItem img={item.img} alt={item.alt} key={item.id} />
          ))}
      </Slider>
    </div>
  );
}
