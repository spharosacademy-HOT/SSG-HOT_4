
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import FooterHeader from "./FooterHeader";
import FooterMenu from "./FooterMenu";
import FooterNotice from "./FooterNotice";
export default function Footer() {


  let pageUrl = useLocation();
  const [pagePath, setPagePath] = useState();

  useEffect(() => {
    setPagePath(pageUrl.pathname);
  }, [pageUrl]);

  return (

    <>

      {pagePath === "/category" ? (
        ""
      ) : pagePath === "/mainsearch" ? (
        ""
      ) : pagePath === "/recent" ? (
        ""
      ) : pagePath === "/cart" ? (
        ""
      ) : (
        <footer>
          <FooterHeader />
          <FooterMenu />
          <FooterNotice />
        </footer>
      )}

    </>
  );
}
