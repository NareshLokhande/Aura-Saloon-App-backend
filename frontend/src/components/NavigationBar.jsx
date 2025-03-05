import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CART_ROUTE,
  HOME_ROUTE,
  PRODUCTS_ROUTE,
  SERVICES_ROUTE,
  SIGNIN_ROUTE,
} from "../constants/AppRoutes";

import "../assets/css/Navigation.css";

export function NavigationBar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // Toggler animation

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <nav className="nav">
      <Link to={HOME_ROUTE} className="logo">
        AURA
      </Link>

      <ul className={active}>
        <li className="nav_item">
          <Link to={SERVICES_ROUTE} className="nav_link">
            Services
          </Link>
        </li>

        <li className="nav_item">
          <Link to={PRODUCTS_ROUTE} className="nav_link">
            Product
          </Link>
        </li>

        <li className="nav_item">
          <Link to={ABOUT_ROUTE} className="nav_link">
            About Us
          </Link>
        </li>

        <li className="nav_item">
          <Link to={CART_ROUTE} className="nav_link">
            Cart
          </Link>
        </li>
        <li className="nav_item">
          <Link to={SIGNIN_ROUTE} className="nav_link">
            Sign In
          </Link>
        </li>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
