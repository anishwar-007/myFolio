import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">myFolio</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <i
            className="fi fi-rr-grid menu-icon"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></i>
        </div>
        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default Header;
