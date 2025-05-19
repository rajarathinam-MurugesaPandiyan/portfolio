"use client";
import { Console } from "console";
import CustomButton from "../custom/custom_button";
import styles from "./intro.module.css";
import dynamic from "next/dynamic";

const IntroAnimation = dynamic(() => import("@/animations/intro_animation"), {
  ssr: false,
});



export default function Intro() {
  return (
    <div className={styles.intro_main}>
      <div className={styles.content_main}>
        <div className={styles.left_content}>
          <div className={styles.contents}>
            <div>
              <span className={styles.name}>{`I'm Rajarathinam`}</span>
              <span className={styles.role}>Software Development Engineer</span>
              <span className={styles.name}>and</span>
              <span className={styles.role}>Content Creator</span>
            </div>
            <br />
            <div>
              <span className={styles.little_intro}>
                I built websites , mobile apps , and do some content creations
                based on coding
              </span>
            </div>
            <br />
            <CustomButton buttonName="Hire Me !!" onTap={()=>console.log("hellop")} />
          </div>
        </div>
        <div className={styles.right_content}>
          <IntroAnimation />
        </div>
      </div>
    </div>
  );
}
