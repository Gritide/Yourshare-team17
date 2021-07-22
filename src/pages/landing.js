import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../style/welcomePage.css";
import animationData from "../lottie/lot.json";
import "../style/welcomePage.css";

export default function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={660} width={400} />
      <Link to="/SignupPage">
        <div>
          <button className="bt">Clickme</button>
        </div>
      </Link>
    </div>
  );
}
