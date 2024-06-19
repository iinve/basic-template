import React, { useState } from "react";
import { Assets } from "../../assets/assets";
import Style from "./Footer.module.scss";
import { FaAngleRight } from "react-icons/fa";
import CommonModal from "../CommonModal";

const Footer = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };
  return (
    <footer className={Style.footer}>
      <div className="wrapper">
        <div className={Style.top_section}>
          <ul>
            <li>
              <img src={data?.studio} alt="Logo" />
            </li>
          </ul>
        </div>
        <div className={Style.bottom_section}>
          <button onClick={handleModal}>
            see more templates
            <FaAngleRight />
          </button>
        </div>
        <div className={Style.uder_footer}>
          <img src={Assets?.Logo_black} alt="Logo" />
          <p>&copy;2024 all right reserved iinve</p>
        </div>
      </div>
      <CommonModal show={show} handleModal={handleModal} />
    </footer>
  );
};

export default Footer;
