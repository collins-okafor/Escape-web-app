import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.style.css";

const Nav = ({ navArr }) => {
  return (
    <div className={"nav-div"}>
      {navArr.map((item, key) => (
        <div key={key} className={`${item.classSection}`}>
          {item.section.map((item, key) => (
            <div key={key}>
              {item.brand ? (
                <div className={`${item.className}`}>
                  <NavLink to={item.link}>{item.brand}</NavLink>
                </div>
              ) : (
                <div className={`${item.className}`}>
                  <div>
                    <NavLink to={item.link}>{item.text}</NavLink>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Nav;
