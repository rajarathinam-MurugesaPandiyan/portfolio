"use client";
import Image from "next/image";
import styles from "./intro.module.css";
import profilePic from "../../images/rajarathinam.png";

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
          <span className={styles.name}>Rajarathinam M</span>
          <p className={styles.role}>Associate Software Engineer</p>
          <div style={{ width: "300px" }}>
            <p className={styles.role}>
              Welcome to my portfolio of captivating digital experiences.
              Explore my work and lets create something extraordinary together.
            </p>
          </div>
          <div className={styles.button_grp}>
            <button className={styles.hire_me} onClick={handleOpenFile} >
              Hire Me
            </button>
            <button className={styles.skills} onClick={scrollToTargetAdjusted}>
              Skills
            </button>
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
