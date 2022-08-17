
import CartContents from "./cartContent/CartContents";
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartNotice from "./CartNotice";
import CartToolBar from "./cartToolBar/CartToolBar";

export default function Cart() {
  let pageUrl = useLocation();
  const [pagePath, setPagePath] = useState();
  
  useEffect(() => {
    setPagePath(pageUrl.pathname);
    // console.log(pageUrl.pathname);
  }, [pageUrl]);

  
  return (<>
         {/* {pagePath === "/login" && 
        
        
        
        
        
        
  }
     */}
    
    
    
    <div className="bgGray">
      <CartHeader />
      <CartContents />
      <CartFooter />
      <CartNotice />
      <CartToolBar />
    </div>
    </>
  );
} 
