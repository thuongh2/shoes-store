import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Login from "./components/Login";
import Product from "./components/Product";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AuthLayout from "./components/AuthLayout";
import Search from "./components/Search";
import Input from "./components/base/Input";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search/:caterory" element={<Search />}></Route>
          <Route path="/i" element={<Input />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
