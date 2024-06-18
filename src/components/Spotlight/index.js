import React from "react";
import { Assets } from "../../assets/assets";
import Style from "./Spotlight.module.scss";
import Header from "../Header";

const Spotlight = () => {
  return (
    <>
      <main
        className={Style.main}
        style={{ "--bg-image": `url(${Assets?.Banner})` }}
      >
        <Header />
        <div className={Style.content}>
          <div className={Style.name}>
            <span>The Wedding of</span>
            <h6>Arun & Anjali</h6>
          </div>
        </div>

        <div className={Style.overlay}></div>
      </main>
    </>
  );
};

export default Spotlight;
