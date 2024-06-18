import React from "react";
import Style from "./Header.module.scss";
import { Assets } from "../../assets/assets";

const Header = () => {
  return (
    <header className={Style.header}>
      <div className={`${Style.wrapper} wrapper`}>
        <h1>
          <img src={Assets.Logo} alt="" />
        </h1>
      </div>
    </header>
  );
};

export default Header;
