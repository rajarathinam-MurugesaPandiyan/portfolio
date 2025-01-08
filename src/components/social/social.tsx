import styles from "./social.module.css";
import Image from "next/image";
import Hastag from "../hashtag/hastag";
import logoMaker from "@/images/Logo.svg";
import dotImage from '@/images/Dots.svg';

interface SocialStruct {
  names: String;
  url: string;
  content: String;
}

const socialConstants: SocialStruct[] = [
  {
    names: "Youtube",
    url: "https://youtube.com/@ethicsofcoding?si=oq8Pel4vVJ2g6XDQ",
    content:
      "🎥 Hey there, code enthusiasts! On my channel Ethics Of Coding, I cook up some cool coding content 🍳💻. Swing by, take a peek 👀, and don't forget to smash that Subscribe button 🔔 and share the love! 🚀✨",
  }
];

export default function Social() {
  return (
    <div id="Social" className={styles.social_main}>
      <div className={styles.skills_header}>
        <div className={styles.skill_style}>
          <Hastag logo="#" />
          social <span className={styles.border}></span>
        </div>
        <div className={styles.view_all}>{"View all"} </div>
      </div>
      <div className={styles.social_body}>
        <div className={styles.image_holder}>
          <div className={styles.social_intro}>
            <div className={styles.text_value}> <p>🌟 I am a Content Creator 🤝💬🚀</p> </div>
          </div>
          <div className={styles.logo_container}>
            <Image
              draggable="false"
              className={styles.profile_pic}
              src={logoMaker}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.dotImage_container}>
            <Image
              draggable="false"
              className={styles.profile_pic}
              src={dotImage}
              alt="Picture of the author"
            />
          </div>

        </div>
        <div className={styles.social_content}>
          {socialConstants.map((e, i) => (
            <a key={i} className={styles.anchor} target="_blank" href={e.url}>
              <div className={styles.social_single}>
                <div className={styles.social_title}>
                  <div className={styles.social_name}> <Hastag logo="#" /> {e.names}</div>
                </div>
                <div className={styles.social_media_content}>{e.content}</div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
