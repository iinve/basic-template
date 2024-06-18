import React from "react";
import { Assets } from "../../assets/assets";
import Style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="wrapper">
        <div className={Style.top_section}>
          <button>see other templates</button>
        </div>
        <div className={Style.bottom_section}>
          <ul>
            <li>
              <img src={Assets?.Created_by} alt="Logo" />
            </li>
            <li></li>
          </ul>
          <div className={Style.uder_footer}>
            <img src={Assets?.Logo_black} alt="Logo" />
            <p> &copy;2024 all right reserved iinve</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
