import Image from "next/image";
import styles from "./intro.module.css";
import profilePic from "../../images/rajarathinam.png";

export default function Intro() {
  return (
    <div className={styles.intro_main}>
     
      <div className={styles.content_main}>
        <div className={styles.left_content}>
          <p className={styles.role}>Associate Software Engineer</p>
          <span className={styles.hi}>Hi There , I'm</span>
          <span className={styles.name}>Rajarathinam</span>
          <div style={{ width: "300px" }}>
            <p className={styles.role}>
              Welcome to my portfolio of captivating digital experiences.
              Explore my work and let's create something extraordinary together.
            </p>
          </div>
          <div className={styles.button_grp}>
            <button className={styles.hire_me}>Hire Me</button>
            <button className={styles.skills}>Skills</button>
          </div>
        </div>
        <div className={styles.right_content}>
          <Image
            draggable="false"
            className={styles.profile_pic}
            src={profilePic}
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
