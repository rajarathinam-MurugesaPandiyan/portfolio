"use client";
import Image from "next/image";
import styles from "./intro.module.css";
import profilePic from "../../images/me.png";

function scrollToTargetAdjusted() {
  var element = document.getElementById("Skills");
  var headerOffset = 85;
  // scroll to your element
  element?.scrollIntoView(true);
  var offsetPosition = window.scrollY - headerOffset;

  window.scroll({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function handleOpenFile() {
  const link = document.createElement('a');
  link.href = '/resume.pdf'; // Path to your PDF file
  link.download = 'resume.pdf'; // Desired name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Intro() {
  return (
    <div className={styles.intro_main}>
      <div className={styles.content_main}>
        <div className={styles.left_content}>

          <div className={styles.contents}>
            <div>
              <span className={styles.name}>I'm Rajarathinam</span>
              <span className={styles.role}>Software Development Engineer</span>
              <span className={styles.name}>
                and
              </span>
              <span className={styles.role}>Content Creator</span>
            </div>
            <br />
            <div>
              <span className={styles.little_intro}>
                I built websites , mobile apps , and do some content creations based on coding
              </span>
            </div>
            <br />

            <button className={styles.skills} onClick={scrollToTargetAdjusted}>
              Contact Me !!
            </button>


          </div>

        </div>
        <div className={styles.right_content}>
          {/* <Image
            draggable="false"
            className={styles.profile_pic}
            src={profilePic}
        
            alt="Picture of the author"
          /> */}
        </div>
      </div>
    </div>
  );
}
