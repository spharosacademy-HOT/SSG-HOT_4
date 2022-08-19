import React from "react";
import MainSlider from "../../components/common/widgets/slider/MainSlider";

export default function MainTemp2() {
  return (
    <div className="smhero_swiper">
      <div className="swiper-container swiper-container-horizontal swiper-container-autoheight swiper-container-ios">
        <MainSlider />
      </div>
      <div className="swiper-pagination swiper-pagination-custom">
        <span className="blind">현재 배너</span>
        <span className="swiper-pagination-current">02</span>
        <span className="swiper-pagination-separator">-</span>
        <span className="blind">전체 배너</span>
        <span className="swiper-pagination-total">18</span>
      </div>
      <div className="swiper-ctrls">
        <div className="swiper_autoplay">
          <button type="button" className="btn_autoplay pause">
            <span className="label_pause">
              <span className="blind">배너 목록 자동 재생 정지</span>
            </span>
            <span className="label_play">
              <span className="blind">배너 목록 자동 재생 시작</span>
            </span>
          </button>
        </div>
        <div className="swiper_moreview">
          <button type="button" className="btn_moreview">
            <span className="blind">배너 전체보기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
