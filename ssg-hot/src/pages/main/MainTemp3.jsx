import React from "react";

export default function MainTemp3() {
  return (
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
            <ul className="smhero_bnlist" data-areaid="smhero" data-impyn="Y">
              <li>
                <div className="smhero_bn gate_unit">
                  <a className="smhero_bnlink" href="#">
                    <div className="smhero_thumb">
                      <img
                        className="ssg_lazy"
                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                        alt="한정판 슈즈 DRAW"
                        data-ll-status="observed"
                      />
                    </div>
                    <div className="smhero_tit">
                      <h3 className="smhero_titmain">
                        <span className="smhero_titmain_tx">
                          한정판 슈즈 DRAW
                        </span>
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
              <li>
                <div className="smhero_bn gate_unit">
                  <a className="smhero_bnlink" href="#">
                    <div className="smhero_thumb">
                      <img
                        className="ssg_lazy"
                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                        alt="스마일클럽 100일 축하해!"
                        data-ll-status="observed"
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
              <li>
                <div className="smhero_bn gate_unit">
                  <a className="smhero_bnlink" href="#">
                    <div className="smhero_thumb">
                      <img
                        className="ssg_lazy"
                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                        alt="가전 TOP25 브랜드전"
                        data-ll-status="observed"
                      />
                    </div>
                    <div className="smhero_tit">
                      <h3 className="smhero_titmain">
                        <span className="smhero_titmain_tx">
                          가전 TOP25 브랜드전
                        </span>
                        <span className="smhero_titmain_tx"></span>
                      </h3>
                      <div className="smhero_titsub">
                        <span className="csmhero_titsub_tx">
                          갤럭시 신제품 출시 기념 혜택 브랜드 쿠폰까지!
                        </span>
                        <span className="csmhero_titsub_tx"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
