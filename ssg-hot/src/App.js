import React from "react";
//modules
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Category from "./pages/category/Category";
import Main from "./pages/main/Main";
import ToolBar from "./components/layout/toolBar/ToolBar";
import Recent from "./pages/recent/Recent";
import LogIn from "./pages/auth/signIn/LogIn";
import SignUp from "./pages/auth/signUp/SignUp";
import Search from "./pages/search/Search";
import Cart from "./pages/cart/Cart";
import Footer from "./components/layout/footer/Footer";
import ProductList from "./pages/product/ProductList";
import ProductReviewPage from "./pages/product/productDetail/productReview/productReviewDetail/ProductReviewPage";
import Product from "./pages/product/Product";
import Header from "./components/layout/header/Header";
import MyPage from "./pages/myPage/MyPage";
import EmailSignUp from "./pages/auth/signUp/emailSignUp/EmailSignUp";
import Qna from "./pages/auth/qna/Qna";
import CartControl from "./pages/myPage/cartcontrol/CartControl";
import PlusShip from "./pages/myPage/cartcontrol/plusship/PlusShip";
import ScrollToTop from "./components/layout/ScrollToTop";

import Like from "./pages/myPage/like/Like";

import Purchase from "./pages/product/productPurchase/Purchase";

//css
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter className="test">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/category" element={<Category />} />
          <Route path="/mainsearch" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productList" element={<ProductList />}>
          <Route path=":categoryMId" element={<ProductList/>}/>
        </Route>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
          <Route path="/product/review" element={<ProductReviewPage />}>
            <Route path=":productId" element={<ProductReviewPage />} />
          </Route>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/emailsignup" element={<EmailSignUp />} />
          <Route path="/cartcontrol" element={<CartControl />} />
          <Route path="/plusship" element={<PlusShip />} />
          <Route path="/qna" element={<Qna />} >
            <Route path=":productId" element={<Qna/>}/>
          </Route>
          <Route path="/like" element={<Like/>}/>
        </Routes>
        <ToolBar />
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;