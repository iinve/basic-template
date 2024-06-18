import React from "react";
import { Assets } from "../../assets/assets";
import Style from "./Spotlight.module.scss";

const Spotlight = () => {
  return (
    <>
      <main className={Style.main}>
        <div className={Style.image_container}>
          <img src={Assets?.Banner} alt="Banner" />
        </div>
        <div className={Style.name}>
          <span>The Wedding of</span>
          <h6>Arun & Anjali</h6>
        </div>
        <div className={Style.overlay}></div>
      </main>
    </>
  );
};

export default Spotlight;
