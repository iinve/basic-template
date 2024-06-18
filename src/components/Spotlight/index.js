import React from "react";
import { Assets } from "../../assets/assets";
import Style from "./Spotlight.module.scss";
import Header from "../Header";

const Spotlight = ({ data }) => {
  console.log(data);
  let background =
    window.innerWidth > 500 ? Assets?.Banner : Assets?.Banner_mob;
  return (
    <>
      <main
        className={Style.main}
        style={{ "--bg-image": `url(${background})` }}
      >
        <Header />
        <div className={Style.content}>
          <div className={Style.name}>
            <span>The Wedding of</span>
            <h6>
              {data?.groomName} & {data?.brideName}
            </h6>
          </div>
        </div>

        <div className={Style.overlay}></div>
      </main>
    </>
  );
};

export default Spotlight;
