import React, { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router-dom";

import HomeLogo from "../../common/ui/logo/HomeLogo";
import HomeSearchBar from "../../common/widgets/searchBar/HomeSearchBar";

export default function Header() {
  let pageUrl = useLocation();
  const [pagePath, setPagePath] = useState();

  useEffect(() => {
    setPagePath(pageUrl.pathname);
    // console.log(pageUrl.pathname);
  }, [pageUrl]);

  let {params} = useParams()
  console.log('params', params)

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
      ) : pagePath === `/product/review/` ? (
        ""
      ) : (
        <header>
          <div className="innerHeader">
            <HomeLogo />
            <HomeSearchBar />
          </div>
        </header>
      )}
    </>
  );
}
