import React from "react";
import Header from "../Header";
import Spotlight from "../Spotlight";
import AboutEvent from "../About";
import Footer from "../Footer";
import { Assets } from "../../assets/assets";
import { Helmet } from "react-helmet-async";

const Home = ({ data }) => {
  const { groomName, brideName } = data || {};
  const groom = groomName || "Groom";
  const bride = brideName || "Bride";

  return (
    <>
      <Helmet>
        <title>Arun & Anjali Wedding Invitation | iinve</title>
        <meta name="title" content="Arun & Anjali Wedding Invitation | iinve" />
        <meta
          name="description"
          content="Arun and Anjali are getting married and joyfully invite you to celebrate their wedding."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="iinve.com" />
        <meta
          property="og:title"
          content="Arun & Anjali Wedding Invitation | iinve"
        />
        <meta
          property="og:description"
          content="Arun and Anjali are getting married and joyfully invite you to celebrate their wedding."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="iinve.com" />
        <meta
          property="twitter:title"
          content="Arun & Anjali Wedding Invitation | iinve"
        />
        <meta
          property="twitter:description"
          content="Arun and Anjali are getting married and joyfully invite you to celebrate their wedding."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Helmet>
      <Spotlight data={data} />
      <AboutEvent data={data} />
      <Footer data={data} />
    </>
  );
};

export default Home;
