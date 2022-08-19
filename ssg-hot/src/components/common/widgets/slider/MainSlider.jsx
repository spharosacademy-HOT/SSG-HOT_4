import React from "react";
import Slider from "react-slick";

export default function MainSlider() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 600,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <li
            className="swiper-slide swiper-slide-duplicate"
            data-swiper-slide-index="17"
            style={{ width: "375px" }}
          >
            <div
              className="smhero_bn gate_unit"
              data-unittype="banr"
              data-advertacctid="1005578088"
              data-advertbidid="1002155725"
              data-advertbilngtypecd="10"
              data-advertkindcd="50"
            >
              <div className="cmitem_tt_adinfo ssg-tooltip-wrap">
                <a href="#" className="cmitem_btn_tt_adinfo ssg-tooltip">
                  <span className="blind">광고 안내 툴팁</span>
                </a>
                <div className="cmitem_tt_adinfo_layer ssg-tooltip-layer">
                  검색어와 관련된 상품으로 입찰가순으로 전시됩니다.
                  <button
                    type="button"
                    className="cmitem_close_tt_adinfo ssg-tooltip-close"
                  >
                    <span className="blind">광고 안내 툴팁 닫기</span>
                  </button>
                </div>
              </div>
              <a
                className="smhero_bnlink"
                // href="javascript:void(0);"
                // onClick="ssg_ad.adClick(this, {link: 'https://www.ssg.com/plan/planShop.ssg?dispCmptId=6000443269', position: 'view'});"
              >
                <div className="smhero_thumb">
                  <img
                    className="swiper-lazy swiper-lazy-loaded"
                    src="https://simg.ssgcdn.com/trans.ssg?src=/ssgadp/5m/72/1002155725m.jpg&amp;w=750&amp;t=5bacaa45c13e639345a312756e4c104869c95698"
                    alt="삼성 갤럭시 Z폴드4|플립4"
                  />
                </div>
                <div className="smhero_tit">
                  <h3 className="smhero_titmain">
                    <span className="smhero_titmain_tx">삼성 갤럭시 Z</span>
                    <span className="smhero_titmain_tx">폴드4|플립4</span>
                  </h3>
                  <div className="smhero_titsub">
                    <span className="csmhero_titsub_tx">
                      사전예약 혜택까지!
                    </span>
                    <span className="csmhero_titsub_tx"></span>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </div>
        <div>
          <li
            className="swiper-slide swiper-slide-prev"
            data-swiper-slide-index="0"
            style={{ width: "375px" }}
          >
            <div className="smhero_bn gate_unit">
              <a
                className="smhero_bnlink"
                href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001510"
              >
                <div className="smhero_thumb">
                  <img
                    className="swiper-lazy swiper-lazy-loaded"
                    src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202208/2022081215110709430360317036_426.jpg&amp;w=750&amp;t=08dba4440ee3eb09f8d55b242adb6cffd2aa4c81"
                    alt="한정판 슈즈 DRAW"
                  />
                </div>
                <div className="smhero_tit">
                  <h3 className="smhero_titmain">
                    <span className="smhero_titmain_tx">한정판 슈즈 DRAW</span>
                    <span className="smhero_titmain_tx"></span>
                  </h3>
                  <div className="smhero_titsub">
                    <span className="csmhero_titsub_tx">
                      SSG X 슈프라이즈 역대급 응모 찬스!
                    </span>
                    <span className="csmhero_titsub_tx"></span>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </div>
        <div>
          <li
            className="swiper-slide swiper-slide-active"
            data-swiper-slide-index="1"
            style={{ width: "375px" }}
          >
            <div className="smhero_bn gate_unit">
              <a
                className="smhero_bnlink"
                href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001476"
              >
                <div className="smhero_thumb">
                  <img
                    className="swiper-lazy swiper-lazy-loaded"
                    src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202208/2022081214361815403830544383_744.jpg&amp;w=750&amp;t=5e09970bb0bb4425ae7f96c75f159faafec6d72c"
                    alt="스마일클럽 100일 축하해!"
                  />
                </div>
                <div className="smhero_tit">
                  <h3 className="smhero_titmain">
                    <span className="smhero_titmain_tx">
                      스마일클럽 100일 축하해!
                    </span>
                    <span className="smhero_titmain_tx"></span>
                  </h3>
                  <div className="smhero_titsub">
                    <span className="csmhero_titsub_tx">
                      오늘 단 하루만 15% 쿠폰+특가상품
                    </span>
                    <span className="csmhero_titsub_tx"></span>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </div>
      </Slider>
    </div>
  );
}
