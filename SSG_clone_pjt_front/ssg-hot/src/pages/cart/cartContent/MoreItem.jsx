import React from "react";

export default function MoreItem() {
  return (
    <div className="mnodr_recomm_morebtn" style={{ marginBottom: 0 }}>
      <a
        href=""
        className="mnodr_more layer_filter cartTracking"
        id="emptyBtn"
        style={{ textDecoration: "none" }}
      >
        상품 더보기
      </a>
      <a
        style={{ display: "none" }}
        className="modal-fix-open"
        data-layer-target="#_layerRec_empty"
      ></a>
    </div>
  );
}
