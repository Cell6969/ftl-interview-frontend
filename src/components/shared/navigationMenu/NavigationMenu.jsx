import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSunrise } from "react-icons/fi";
import PerfectScrollbar from "react-perfect-scrollbar";
import Menus from "./Menus";
import { NavigationContext } from "../../../contentApi/navigationProvider";

const NavigationManu = () => {
  const { navigationOpen, setNavigationOpen } = useContext(NavigationContext);
  const pathName = useLocation().pathname;
  useEffect(() => {
    setNavigationOpen(false);
  }, [pathName]);
  return (
    <nav
      className={`nxl-navigation ${
        navigationOpen ? "mob-navigation-active" : ""
      }`}
    >
      <div className="navbar-wrapper">
        <div className="m-header" style={{ backgroundColor: "black" }}>
          <Link to="/" className="b-brand">
            {/* <!-- ========   change your logo hear   ============ --> */}
            <div className="flex items-center">
              <img
                src="/logo2.png"
                alt="logo"
                className="logo logo-lg"
                style={{ width: "100px" }}
              />
              <span className="logo logo-lg" style={{ color: "white" }}>
                IMeeting
              </span>
            </div>
            <img src="/logo2.png" alt="logo" className="logo logo-sm" />
          </Link>
        </div>

        <div className={`navbar-content`}>
          <PerfectScrollbar>
            <ul className="nxl-navbar">
              <li className="nxl-item nxl-caption">
                <label>Navigation</label>
              </li>
              <Menus />
            </ul>
            <div style={{ height: "18px" }}></div>
          </PerfectScrollbar>
        </div>
      </div>
      <div
        onClick={() => setNavigationOpen(false)}
        className={`${navigationOpen ? "nxl-menu-overlay" : ""}`}
      ></div>
    </nav>
  );
};

export default NavigationManu;
