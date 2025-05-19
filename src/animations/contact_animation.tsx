"use client";

import * as animationData from '@/images/contact.json';
import { useLottie } from "lottie-react";

const ContactAnimation = ({ css }: { css: string }) => {
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

export default ContactAnimation;