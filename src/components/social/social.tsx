import styles from "./social.module.css";
import uprightarrow from "../../images/up-right-arrow.gif";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";

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
      "Here I create some videos realted to coding , The Channel name is Ethics Of Coding, Take a look into the channel , do subscribe and share.",
  },
  {
    names: "Medium",
    url: "https://medium.com/@rajamurugesan217",
    content:
      "I write some blogs related to coding and other difficulties in the community thus they can expore more into new concepts via reading.",
  },
  {
    names: "StackOverflow",
    url: "https://stackoverflow.com/users/19091209/rajarathinam-murugesan?tab=profile",
    content:
      "Here I answer some questions that are raised by the community people and I try to solve them by giving solutions.",
  },
];

export default function Social() {
  return (
    <div id="Social" className={styles.social_main}>
      <div className={styles.social_head}>Social</div>
      <div className={styles.social_des}>
        Im a Content Creator in YT to educate people , Blogger in Medium and
        many other things constantly contributing to the social platforms for my
        fellow developers and other peoples.
      </div>
      <div className={styles.social_content}>
        {socialConstants.map((e, i) => (
          <a key={i} className={styles.anchor} target="_blank" href={e.url}>
            <div className={styles.social_single}>
              <div className={styles.social_title}>
                <div className={styles.social_name}> {e.names}</div>
                <div>
                  <Image
                    draggable="false"
                    src={uprightarrow}
                    className={styles.images}
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className={styles.social_media_content}>{e.content}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
