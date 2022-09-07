import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ToolBarButton from "../../common/widgets/button/ToolBarButton";
import { toolMenu, toolMenu2 } from "../../../datas/js/toolBar";

export default function ToolBar() {
  let pageUrl = useLocation();
  const [pagePath, setPagePath] = useState("");

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
      ) : pagePath === "/emailsignup" ? (
        ""
      ) : pagePath === "/qna" ? (
        ""
      ) : pagePath === "/cartcontrol" ? (
        ""
      ) : pagePath === "/plusship" ? (
        ""
      ) : (
        <div className="toolBar">
          <ul className="toolUl">
            {localStorage.getItem("token") !== null ? (
              <>
                {toolMenu &&
                  toolMenu.map((menu) => (
                    <ToolBarButton
                      key={menu.id}
                      name={menu.name}
                      icon={menu.icon}
                      url={menu.url}
                    />
                  ))}
              </>
            ) : (
              <>
                {toolMenu2 &&
                  toolMenu2.map((menu) => (
                    <ToolBarButton
                      key={menu.id}
                      name={menu.name}
                      icon={menu.icon}
                      url={menu.url}
                    />
                  ))}
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
