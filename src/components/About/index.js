import React from "react";
import Style from "./About.module.scss";
const AboutEvent = ({ data }) => {
  return (
    <div className={Style.about_event}>
      <div className="wrapper">
        <p>
          We are overjoyed to announce that{" "}
          <b>
            {data?.groomName} & {data?.brideName}
          </b>{" "}
          will be exchanging vows and celebrating their love on{" "}
          <b>{data?.date}</b> at <b>{data?.time}</b> at <b>{data?.venue}</b>.
          Following the ceremony, please join us for a joyful reception filled
          with dinner, dancing, and cherished moments. Your presence will make
          our day truly unforgettable.We are overjoyed to announce that
          <b>
            {data?.groomName} & {data?.brideName}
          </b>{" "}
          will be exchanging vows and celebrating their love on{" "}
          <b>{data?.date}</b> at <b>{data?.time}</b> at <b>{data?.venue}</b>.
          Following the ceremony, please join us for a joyful reception filled
          with dinner, dancing, and cherished moments. Your presence will make
          our day truly unforgettable.
        </p>
        <div className={Style.date}>
          <span>{data?.month}</span>
          <span>{data?.day}</span>
          <span>{data?.weekday}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
