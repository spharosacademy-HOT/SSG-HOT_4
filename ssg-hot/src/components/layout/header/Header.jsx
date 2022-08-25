import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import HomeLogo from "../../common/ui/logo/HomeLogo";
import HomeSearchBar from "../../common/widgets/searchBar/HomeSearchBar";

export default function Header() {
  let pageUrl = useLocation();
  const [pagePath, setPagePath] = useState();

  useEffect(() => {
    setPagePath(pageUrl.pathname);
    // console.log(pageUrl.pathname);
  }, [pageUrl]);

  return (
    <>
      {pagePath === "/login" ? (
        ""
      ) : pagePath === "/recent" ? (
        ""
      ) : pagePath === "/mainsearch" ? (
        ""
      ) : pagePath === "/cart" ? (
        ""
      ) : pagePath === "/mypage" ? (
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
      ) : pagePath === "/like" ? (
        ""
      ) : (
        <header>
          <div className="innerHeader">
            <HomeLogo />
            <HomeSearchBar />
          </div>
        </header>
        // <header>
        //   <div className="innerHeader">
        //     <HomeLogo />
        //     <HomeSearchBar />
        //   </div>
        // </header>
      )}
    </>
  );
}
