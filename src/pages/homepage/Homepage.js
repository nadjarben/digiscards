import React from "react";
import { DOMAIN, APP_NAME } from "../../utils/environment";
import { Helmet } from "react-helmet";

import Appbar from "../../components/navbar/Appbar";
import GetYour from "../../components/homepage/GetYour";
import Contact from "../../components/homepage/Contact";
import Footer from "../../components/footer/Footer";

import "./Homepage.scss";
import video from "../../assets/videos/presentation.mp4";

const Homepage = () => {
  return (
    <div className="app">
      <Helmet>
        <title>{APP_NAME} | Get your own digital card </title>
        <meta
          name="description"
          content="With the digital visit card you can group all the social informations about your company and share it easily to increase your online visibility, all in a modern application style"
        />
        <meta
          property="og:title"
          content={`${APP_NAME} | Get your own digital card`}
        />
        <meta
          property="og:description"
          content="With the digital visit card you can group all the social informations about your company and share it easily to increase your online visibility, all in a modern application style"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />
        <meta
          property="og:image"
          content={`${DOMAIN}/static/images/index/og.jpg`}
        />
        <meta
          property="og:image:secure_url"
          content={`${DOMAIN}/static/images/index/og.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />

        <meta name="msapplication-TileColor" content="#1ec503" />
        <meta name="theme-color" content="#1ec503" />
        <link
          rel="manifest"
          href={`${DOMAIN}/static/images/icons/manifest.json`}
        />
        <link
          rel="shortcut icon"
          href={`${DOMAIN}/static/images/icons/favicon.ico`}
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1ec503" />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${DOMAIN}/static/images/icons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${DOMAIN}/static/images/icons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${DOMAIN}/static/images/icons/favicon-16x16.png`}
        />
      </Helmet>
      <Appbar color="transparent" position="absolute" />
      <div className="video-div">
        <div className="video-background">
          <video className="iframe" autoPlay="autoplay" loop="loop" muted>
            <source className="video" src={video} type="video/mp4" />
          </video>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8"></div>
            <div className="col-xl-4 text-center get-your-div">
              <GetYour />
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
