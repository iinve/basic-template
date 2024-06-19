import React from "react";
import StarBackground from "../StarBackground";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>iinve - Page not found</title>
      </Helmet>
      <div className="no-data">
        <StarBackground />
        404 found
      </div>
    </>
  );
};

export default NotFound;
