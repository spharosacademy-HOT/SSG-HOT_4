import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import CartContents from "./CartContents";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartNotice from "./CartNotice";

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
    </div>
    </>
  );
} 
