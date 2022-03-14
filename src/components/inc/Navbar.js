import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-ALTA@2x.png";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="alterra">
              <a href="index.html">
                <img className="logo-atas" src={Logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="row align-items-center navig">
              <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                <Link to="/" className="aktif">
                  HOME
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                <Link to="/about">ABOUT</Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                <Link to="/experience">EXPERIENCE</Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                <Link to="/contact">CONTACT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
