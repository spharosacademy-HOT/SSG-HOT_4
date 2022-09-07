import React from 'react'
import ProductCaroselItem from './ProductCaroselItem';
// import Slider from "react-slick";

function ProductCarosel() {
    return ( 
        <>
            <div className="cm_topbn_osmu v2">
            <div className="cmhero_banner">
                <div className="cmhero_swiper" id="_cmhero_swiper">
                    <div className="swiper-container">
                        <ul className="swiper-wrapper">
                            <ProductCaroselItem/>
                        </ul>
                    </div>
                    <div className="swiper-ctrls">
                        <div className="swiper_ctrls_util">
                            <div className="swiper_autoplay">
                                <button type="button" className="btn_autoplay pause">
                                <span className="label_pause"><span className="blind">배너 목록 자동 재생 정지</span></span>
                                <span className="label_play"><span className="blind">배너 목록 자동 재생 시작</span></span>
                                </button>
                            </div>
                            <div className="swiper_moreview">
                                <button type="button" className="btn_moreview"><span className="blind">배너 전체보기</span></button>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="cmhero_viewer" role="dialog" tabIndex="-1" aria-hidden="true">
                    <div className="cmhero_wrap" role="document" tabIndex="0">
                        <div className="cmhero_scroll">
                            <div className="cmhero_head">
                                <h3 className="cmhero_head_tit">전체보기</h3>
                                <button type="button" className="cmhero_close"><span className="blind">배너 전체보기 닫기</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default ProductCarosel;