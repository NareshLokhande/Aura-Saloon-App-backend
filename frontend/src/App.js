import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CART_ROUTE,
  HOME_ROUTE,
  PRODUCTS_ROUTE,
  SERVICES_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from "./constants/AppRoutes";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { Contact } from "./components/Contact";
import { AboutUS } from "./pages/AboutUs";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import Footer from "./components/Footer";
import { Cart } from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Global.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={SERVICES_ROUTE} element={<Services />} />
        <Route path={PRODUCTS_ROUTE} element={<Products />} />
        <Route path={ABOUT_ROUTE} element={<AboutUS />} />
        <Route path={SIGNIN_ROUTE} element={<SignIn />} />
        <Route path={SIGNUP_ROUTE} element={<SignUp />} />
        <Route path={CART_ROUTE} element={<Cart />} />
      </Routes>
      <Contact />
      <Footer />
</BrowserRouter>
  );
}

export default App;
