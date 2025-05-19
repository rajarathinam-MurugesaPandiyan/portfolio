"use client";

import * as animationData from '@/images/floating.json';
import { useLottie } from "lottie-react";
import { HTMLAttributes } from 'react';

const FloatingAnimation = ({css} : {css : string}) => {
    const defaultOptions = {
        animationData: animationData,
        loop: true,
    };

    const { View } = useLottie(defaultOptions);

    return (
        <>
            <div>
                <div className={css} >{View}</div>
            </div>
        </>
    );
};

export default FloatingAnimation;