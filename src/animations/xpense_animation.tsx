"use client";

import * as animationData from "@/images/xpense.json";
import { useLottie } from "lottie-react";

const XpenseAnimation = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
      <div
        style={{
          backgroundColor: "white",
          width: "100px",
          height: "100px",
          cursor: "pointer",
        }}
      >
        {View}
      </div>
  );
};

export default XpenseAnimation;
