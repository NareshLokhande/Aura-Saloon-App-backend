import React from "react";
import "../assets/css/Footer.css";
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  PRODUCTS_ROUTE,
  SERVICES_ROUTE,
} from "../constants/AppRoutes";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-box">
          <div className="heading">
            <h4>
              Aura <br />
              Services
            </h4>
          </div>
          <div class="row ">
            <div class="col">
              <h6> Company </h6>
              <ul>
                <li>
                  <Link to={HOME_ROUTE}>Home</Link>
                </li>
                <li>
                  <Link to={ABOUT_ROUTE}>About us</Link>
                </li>
                <li>
                  <Link to={SERVICES_ROUTE}>Services</Link>
                </li>
                <li>
                  <Link to={PRODUCTS_ROUTE}>Products</Link>
                </li>
              </ul>
            </div>
            <div class="col">
              <h6> For Customers </h6>
              <p>
                Aura review <br />
                Blog <br />
                Categories near you
              </p>
            </div>
            <div class="col">
              <h6> For partners </h6>
              <p>
                Register as a professional <br />
              </p>
            </div>
          </div>
          <div>
            <p>
              &copy; Copyright 2024 Aura Services Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
