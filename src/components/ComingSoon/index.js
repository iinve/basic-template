import React from "react";
import StarBackground from "../StarBackground";
import { Assets } from "../../assets/assets";
import SEOImage from "../../assets/images/og-image.png";
import { Helmet } from "react-helmet-async";

const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <title>iinve - Create Elegant Wedding Invitations</title>
        <meta name="title" content="iinve | Make invitation for your wedding" />
        <meta
          name="description"
          content="Plan your perfect wedding with iinve's easy-to-use invitations. Send stunning invitations with your favorite images, and share important details with your loved ones. Start creating your dream wedding website today with iinve!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="iinve.com" />
        <meta
          property="og:title"
          content="iinve - Create Elegant Wedding Invitations"
        />
        <meta
          property="og:description"
          content="Plan your perfect wedding with iinve's easy-to-use invitations. Send stunning invitations with your favorite images, and share important details with your loved ones. Start creating your dream wedding website today with iinve!"
        />
        <meta property="og:image" content={"https://iinve.com" + SEOImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="iinve.com" />
        <meta
          property="twitter:title"
          content="iinve - Create Elegant Wedding Invitations"
        />
        <meta
          property="twitter:description"
          content="Plan your perfect wedding with iinve's easy-to-use invitations. Send stunning invitations with your favorite images, and share important details with your loved ones. Start creating your dream wedding website today with iinve!"
        />
        <meta
          property="twitter:image"
          content={"https://iinve.com" + SEOImage}
        />
      </Helmet>
      <div className="no-data">
        <img src={Assets.Logo} alt="Logo" />
        <StarBackground />
        Designing magic for you!
      </div>
    </>
  );
};

export default ComingSoon;
