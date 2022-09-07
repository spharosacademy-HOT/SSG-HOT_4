import React from "react";

export default function CartToolBarToogle() {
  return (
    <div className="mnodr_toolbar_cont mnodr_toolbar_toggle">
      <div className="mnodr_toolbar_state">
        <div className="mnodr_txbox">
          <a
            href="https://member.ssg.com/m/membership/gate.ssg"
            className="mnodr_tx_link2 mmbrs_tx_point cartTracking"
            data-tracking-cd="00044_000000094_t00060"
            data-tracking-value="멤버십가입하기"
          >
            <p className="mnodr_tx_flex mmbrs_tx_point">
              <i className="badge ty_s badge_mmbrs_brown">
                <span className="blind">스마일클럽</span>
              </i>
              <span className="mnodr_bene_desc">
                <strong>
                  가입시 SSG MONEY 최대 <span className="totMbrspPoint">0</span>
                  원 적립
                </strong>
              </span>
            </p>
            <i className="icon ty_xs icon_chevron_right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
