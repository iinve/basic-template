import React from "react";
import StarBackground from "../StarBackground";
import { Assets } from "../../assets/assets";

const ComingSoon = () => {
  return (
    <div className="no-data">
      <img src={Assets.Logo} alt="Logo" />
      <StarBackground />
      Designing magic for you!
    </div>
  );
};

export default ComingSoon;
