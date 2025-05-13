"use client";

import * as animationData from '@/images/intro.json';
import { useLottie } from "lottie-react";

const IntroAnimation = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div style={{ backgroundColor: "transparent" }}>
        <div className="w-full" style={{ width: "50vw", height: '50vh', cursor: 'pointer' }}>{View}</div>
      </div>
    </>
  );
};

export default IntroAnimation;