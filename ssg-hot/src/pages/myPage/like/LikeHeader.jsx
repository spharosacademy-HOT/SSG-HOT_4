import React from "react";
import LikeModal from "./LikeModal.jsx";
import LikeModal2 from "./LikeModal2.jsx";
function LikeHeader() {
  return (
    <>
      <div id="m_content" className="react-area">
        <input type="hidden" name="modifyMod" value="" id="modifyMod" />
        <div div className="mylike_wrap">
          <div className="mylike_folder">
            <div className="mylike_folder_slider" style={{ height: "100px" }}>
              <ul className="mylike_folder_list" role="tablist">
                <li className="mylike_folder_item" role="presentation">
                  <a
                    href="#;"
                    className="mylike_folder_btn ty_all clickable on "
                    role="tab"
                    aria-selected="true"
                    data-react-tarea="좋아요|상단_폴더리스트|전체보기_클릭"
                  >
                    <span className="mylike_folder_thmb"></span>
                    <em className="mylike_folder_name">전체보기</em>
                  </a>
                </li>
                <li
                  className="mylike_folder_item"
                  role="presentation"
                  id="mylike_folder_new"
                >
                  <LikeModal />
                </li>
                <li className="mylike_folder_item" role="presentation">
                  <LikeModal2 />
                  <span className="mylike_folder_thmb"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LikeHeader;
