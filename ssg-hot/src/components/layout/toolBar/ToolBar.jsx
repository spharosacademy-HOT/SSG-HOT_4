import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ToolBarButton from "../../common/widgets/button/ToolBarButton";
import toolMenu from "../../../datas/js/toolBar";

export default function ToolBar() {
  let pageUrl = useLocation();
  const [pagePath, setPagePath] = useState();

  useEffect(() => {
    setPagePath(pageUrl.pathname);
  }, [pageUrl]);
  return (
    <>
      {pagePath === "/login" ? (
        ""
      ) : pagePath === "/mainsearch" ? (
        ""
      ) : pagePath === "/signup" ? (
      ""
      ): pagePath === "/emailsignup" ? (
      ""
       ): pagePath === "/qna" ? (
       ""
       ): pagePath === "/cartcontrol" ?(
       ""
       ): pagePath === "/plusship" ?
       ""
       :
       (
      
        
      

        <div className="toolBar">
          <ul className="toolUl">
            {toolMenu &&
              toolMenu.map((menu) => (
                <Link to={menu.url} key={menu.id}>
                  <ToolBarButton name={menu.name} icon={menu.icon} />
                </Link>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}
