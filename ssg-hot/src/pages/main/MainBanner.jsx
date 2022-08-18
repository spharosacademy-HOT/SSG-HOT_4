import React from "react";
import mainBannerData from "../../datas/json/mainBanner.json";

export default function MainBanner() {
  return (
    <div className="smhero_banner_wrap" style={{ paddingBottom: "347px" }}>
      <div id="smhero_banner" className="smhero_banner">
        <div className="smhero_swiper">
          <div className="swiper-container swiper-container-horizontal swiper-container-autoheight swiper-container-ios">
            <ul
              className="swiper-wrapper"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-6375px, 0px, 0px)",
                height: "375px",
              }}
            >
              <li
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="23"
                style={{ width: "375px" }}
              >
                <div
                  className="smhero_bn gate_unit"
                  data-unittype="banr"
                  data-advertacctid="1005578087"
                  data-advertbidid="1002136951"
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
                    // onClick="ssg_ad.adClick(this, {link: 'https://www.ssg.com/plan/planShop.ssg?dispCmptId=6000010266', position: 'view'});"
                  >
                    <div className="smhero_thumb">
                      <img
                        className="swiper-lazy swiper-lazy-loaded"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/ssgadp/1m/95/1002136951m.jpg&amp;w=750&amp;t=a4c9124f0e29fede8ceff85475b91ebce3ebca6a"
                        alt="CKJ이월부터 신상까지"
                      />
                    </div>
                    <div className="smhero_tit">
                      <h3 className="smhero_titmain">
                        <span className="smhero_titmain_tx">CKJ</span>
                        <span className="smhero_titmain_tx">
                          이월부터 신상까지
                        </span>
                      </h3>
                      <div className="smhero_titsub">
                        <span className="csmhero_titsub_tx">최대 80% 할인</span>
                        <span className="csmhero_titsub_tx"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              {mainBannerData &&
                mainBannerData.map((mainBanner) => (
                  <li
                    className="swiper-slide"
                    data-swiper-slide-index="0"
                    style={{ width: "375px" }}
                    key={mainBanner.id}
                  >
                    <div className="smhero_bn gate_unit">
                      <a className="smhero_bnlink" href={mainBanner.blink}>
                        <div className="smhero_thumb">
                          <img
                            className="swiper-lazy swiper-lazy-loaded"
                            src={mainBanner.imgUrl}
                            alt={mainBanner.mTitle}
                          />
                        </div>
                        <div className="smhero_tit">
                          <h3 className="smhero_titmain">
                            {mainBanner &&
                              mainBanner.mTitle.map((title) => (
                                <span
                                  key={title.id}
                                  className="smhero_titmain_tx"
                                >
                                  {title.content}
                                </span>
                              ))}
                            <span className="smhero_titmain_tx"></span>
                          </h3>
                          <div className="smhero_titsub">
                            {mainBanner &&
                              mainBanner.subTxt.map((sub) => (
                                <span
                                  key={sub.id}
                                  className="csmhero_titsub_tx"
                                >
                                  {sub.content}
                                </span>
                              ))}
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="swiper-pagination swiper-pagination-custom">
            <span className="blind">현재 배너</span>
            <span className="swiper-pagination-current">17</span>
            <span className="swiper-pagination-separator">-</span>
            <span className="blind">전체 배너</span>
            <span className="swiper-pagination-total">24</span>
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
        <div
          className="smhero_viewer"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="smhero_wrap" role="document" tabIndex="0">
            <div className="smhero_scroll">
              <div className="smhero_head">
                <h3 className="smhero_head_tit">전체보기</h3>
                <button type="button" className="smhero_close">
                  <span className="blind">배너 전체보기 닫기</span>
                </button>
              </div>
              <div className="smhero_cont">
                <ul
                  className="smhero_bnlist"
                  data-areaid="smhero"
                  data-impyn="Y"
                >
                  {mainBannerData &&
                    mainBannerData.map((banner) => (
                      <li key={banner.id}>
                        <div className="smhero_bn gate_unit">
                          <a className="smhero_bnlink" href={banner.blink}>
                            <div className="smhero_thumb">
                              <img
                                className="ssg_lazy"
                                src={banner.imgUrl}
                                data-src={banner.blink}
                                alt={banner.mTitle}
                                data-ll-status="observed"
                              />
                            </div>
                            <div className="smhero_tit">
                              <h3 className="smhero_titmain">
                                {banner.mTitle &&
                                  banner.mTitle.map((title) => (
                                    <span
                                      key={title.id}
                                      className="smhero_titmain_tx"
                                    >
                                      {title.content}
                                    </span>
                                  ))}
                                <span className="smhero_titmain_tx"></span>
                              </h3>
                              <div className="smhero_titsub">
                                {banner.subTxt &&
                                  banner.subTxt.map((sub) => (
                                    <span
                                      key={sub.id}
                                      className="csmhero_titsub_tx"
                                    >
                                      {sub.content}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
