import React from "react";
//modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";
import Main from "./pages/main/Main";
//components
import ToolBar from "./components/layout/toolBar/ToolBar";
import Recent from "./pages/recent/Recent";
// css
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

function App() {
  return (
    <BrowserRouter className="test">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/category" element={<Category />} />
        <Route path="/mainsearch" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productList" element={<ProductList />} />
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
        <Route path="/qna" element={<Qna />} />
      </Routes>
      <ToolBar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
