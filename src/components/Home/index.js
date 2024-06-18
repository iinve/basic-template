import React from "react";
import Header from "../Header";
import Spotlight from "../Spotlight";
import AboutEvent from "../About";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import { Assets } from "../../assets/assets";

const Home = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>
          {data?.groomName + " & " + data?.brideName} Wedding Invitation | iinve
        </title>
        <meta name="description" content="We are ready to get married." />
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:url"
          content={`https://www.iinve.com/wedding/${data?.groomName}-${data?.brideName}`}
        />
        <meta property="og:image" content={Assets?.Banner_mob} />
        <meta
          name="twitter:title"
          content={`  ${
            data?.groomName + " & " + data?.brideName
          } Wedding Invitation | iinve`}
        />
        <meta
          name="twitter:description"
          content="We are ready to get married."
        />
        <meta name="twitter:image" content={Assets?.Banner_mob} />
      </Helmet>
      <Spotlight data={data} />
      <AboutEvent data={data} />
      <Footer data={data} />
    </>
  );
};

export default Home;
