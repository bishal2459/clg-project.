import React from "react";
import "./header.css";
import { NavLink, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import logo from "../lottie/logo.json";

const Header = () => {
  const location = useLocation();

  const logoAnimate = {
    loop: true,
    autoplay: true,
    animationData: logo,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <div className="A1">
              <Lottie
                animationData={logoAnimate.animationData}
                loop={logoAnimate.loop}
                autoplay={logoAnimate.autoplay}
                style={{ height: 120, width: "100%" }}
              />
            </div>
            <div className="A2">
              <h2>Diabetes Prediction System</h2>
            </div>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/info">Info</NavLink>
            </li>
            <li>
              <NavLink to="/howtocheck">How to Check</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            {/* <li>{location.pathname === "/admin/upload" ? <NavLink to="/">Logout</NavLink> : <NavLink to="/"></NavLink>}<br/></li>
                <li>{location.pathname === "/admin/upload/viewer" ? <NavLink to="/">Logout</NavLink> : <NavLink to="/"></NavLink>}<br/></li>
                <li>{location.pathname === "/admin/upload/viewer/viewerdata" ? <NavLink to="/">Logout</NavLink> : <NavLink to="/"></NavLink>}<br/></li> */}

            <li>
              {[
                "/admin/upload",
                "/admin/upload/viewer",
                "/admin/upload/viewer/viewerdata",
              ].includes(location.pathname) ? (
                <NavLink to="/">Logout</NavLink>
              ) : (
                <NavLink to="/"></NavLink>
              )}
              <br />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
