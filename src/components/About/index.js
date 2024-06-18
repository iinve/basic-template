import React from "react";
import Style from "./About.module.scss";
const AboutEvent = () => {
  return (
    <div className={Style.about_event}>
      <div className="wrapper">
        <p>
          We are overjoyed to announce that [Couple's Names] will be exchanging
          vows and celebrating their love on [Date] at [Time] at [Venue Name and
          Address]. Following the ceremony, please join us for a joyful
          reception filled with dinner, dancing, and cherished moments. Your
          presence will make our day truly unforgettable.We are overjoyed to
          announce that [Couple's Names] will be exchanging vows and celebrating
          their love on [Date] at [Time] at [Venue Name and Address]. Following
          the ceremony, please join us for a joyful reception filled with
          dinner, dancing, and cherished moments. Your presence will make our
          day truly unforgettable.
        </p>
        <div className={Style.date}>
          <span>May</span>
          <span>20</span>
          <span>Monday</span>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
