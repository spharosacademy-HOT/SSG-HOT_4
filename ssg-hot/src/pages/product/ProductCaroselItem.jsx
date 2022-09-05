import React from "react";

function ProductCaroselItem() {
  return (
    <>
      <li className="swiper-slide">
        <div className="cmhero_bn">
          <a className="cmhero_bnlnk" href="#">
            <img
              className="swiper-lazy"
              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202205/2022052613224043219795903979_271.jpg&w=750&h=430&edit=c&t=ed6c27b78869b65fd6623f5f21c28c059cf19dd0"
              alt="칼린/키플링 外 TOP5 갈라쇼 최대 80% + 추가쿠폰  "
            />
          </a>
        </div>
        <div className="cmhero_tit">
          <a className="cmhero_titlnk" href="#">
            <h3 className="cmhero_titmain">칼린/키플링 外 TOP5 갈라쇼</h3>
            <div className="cmhero_titsub">최대 86% + 추가쿠폰</div>
          </a>
        </div>
      </li>
    </>
  );
}

export default ProductCaroselItem;
