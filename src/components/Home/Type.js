import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack JavaScript Developer",
          "Autonomous Learner",
          "Open Source Contributor",
          "Ambitious Young Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60
      }}
    />
  );
}

export default Type;
