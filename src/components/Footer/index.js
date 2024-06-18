import React from "react";
import { Assets } from "../../assets/assets";
import Style from "./Footer.module.scss";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="wrapper">
        <div className={Style.top_section}>
          <ul>
            <li>
              <img src={Assets?.Bokehads} alt="Logo" />
            </li>
          </ul>
        </div>
        <div className={Style.bottom_section}>
          <button>
            see other templates
            <FaAngleRight />
          </button>
        </div>
        <div className={Style.uder_footer}>
          <img src={Assets?.Logo_black} alt="Logo" />
          <p> &copy;2024 all right reserved iinve</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
