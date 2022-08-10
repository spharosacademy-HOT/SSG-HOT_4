import React from "react";
//modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";
import Main from "./pages/main2/Main";
//components
import ToolBar from "./components/layout/toolBar/ToolBar";
import Recent from "./pages/recent/Recent";
// css
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./pages/auth/signIn/LogIn";
import Search from "./pages/search/Search";
import Cart from "./pages/cart/Cart";
import Footer from "./components/layout/footer/Footer";
import ProductList from "./pages/product/ProductList";
import Product from "./pages/product/Product";
import Header from "./components/layout/header/Header";
import MyPage from "./pages/myPage/MyPage";
import Cart2 from "./pages/cart2/Cart2";

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
        <Route path="/cart2" element={<Cart2 />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <ToolBar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
