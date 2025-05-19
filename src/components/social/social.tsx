import styles from "./social.module.css";
import Hastag from "../hashtag/hastag";
import { SocialProp } from "./model/social_prop_type";
import TitleHeader from "../title_header";



export default function Social({ socialProp }: { socialProp: SocialProp[] }) {
  return (
    <div id="Social" className={styles.social_main}>
      <TitleHeader title_name="Contributions" />
      <div className={styles.social_body}>
        <div className={styles.social_content}>
          {socialProp.map((e, i) => (
            <a key={i} className={styles.anchor} target="_blank" href={e.url}>
              <div className={styles.social_single}>
                <div className={styles.social_title}>
                  <div style={{ paddingLeft: '10px', backgroundColor: "transparent" }}>{e.icons}</div>
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
