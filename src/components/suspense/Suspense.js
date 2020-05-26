import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loadingData from "../../assets/animations/loading.json";

import "./Suspense.scss";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Suspense = () => {
  return (
    <div className="suspense">
      <FadeIn>
        <div className="centered">
          <Lottie options={defaultOptions} />
        </div>
      </FadeIn>
    </div>
  );
};

export default Suspense;
