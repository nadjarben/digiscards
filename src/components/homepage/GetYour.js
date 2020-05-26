import React from "react";
import { Link } from "react-router-dom";
import { bounceInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

import "./GetYour.scss";

const anim = {
  bounce: {
    animation: "x 2s",
    animationName: Radium.keyframes(bounceInDown, "bounce"),
  },
};

const GetYour = () => {
  return (
    <StyleRoot>
      <div style={anim.bounce}>
        <p className="get-your-text">Get your Digital card Application</p>
        <p className="from-text">* From 85€ /year</p>
        <Link to="/plan">
          <button className="btn-black">Get yours</button>
        </Link>
        <Link to="/partners">
          <button className="btn-black ml-3">View models</button>
        </Link>
      </div>
    </StyleRoot>
  );
};

export default GetYour;
