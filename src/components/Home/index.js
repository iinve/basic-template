import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Spotlight from "../Spotlight";
import AboutEvent from "../About";
import Footer from "../Footer";
import { Assets } from "../../assets/assets";

const Home = ({ data }) => {
  const { groomName, brideName } = data || {};
  const groom = groomName || "Groom";
  const bride = brideName || "Bride";

  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content={`${groom} & ${bride} Wedding Invitation | iinve`}
        />
        <meta
          property="og:description"
          content="We are ready to get married."
        />
        <meta property="og:site_name" content="iinve.com" />
        <meta property="og:url" content="https://iinve.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Assets?.Banner} />

        <title>{`${groom} & ${bride} Wedding Invitation | iinve`}</title>
        <meta name="description" content="We are ready to get married." />
      </Helmet>
      <Spotlight data={data} />
      <AboutEvent data={data} />
      <Footer data={data} />
    </>
  );
};

export default Home;
