import React from "react";

import Header from "../../components/homepage/Header";
import Appbar from "../../components/navbar/Appbar";
import GetYour from "../../components/homepage/GetYour";
import Contact from "../../components/homepage/Contact";
import Footer from "../../components/footer/Footer";

import video from "../../assets/videos/presentation.mp4";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="app">
      <Header />
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
