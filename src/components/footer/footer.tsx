import { GithubFilled, InstagramFilled, LinkedinFilled, RedditCircleFilled, TwitterOutlined, YoutubeFilled } from "@ant-design/icons";
import styles from "./footer.module.css";
import dynamic from "next/dynamic";

const ThanksAnimation = dynamic(() => import("@/animations/thanks_animation"), {
  ssr: false,
});

export default function Footer() {
  return <div className={styles.footer_main}>

    <div>
      <ThanksAnimation css={styles.thanks} />
    </div>
    <div className={styles.social_container}>
      <a className={styles.anchor} target="_blank" href={"https://www.instagram.com/this.rajarathinam/"}> <InstagramFilled className={styles.icons} /></a>
      <a className={styles.anchor} target="_blank" href={"https://www.linkedin.com/in/rajarathinam-murugesapandiyan/"}>  <LinkedinFilled className={styles.icons} /></a>
      <a className={styles.anchor} target="_blank" href={"https://x.com/RajarathinamMu4"}> <TwitterOutlined className={styles.icons} /></a>
      <a className={styles.anchor} target="_blank" href={"https://github.com/rajarathinam-MurugesaPandiyan"}>   <GithubFilled className={styles.icons} /></a>
      <a className={styles.anchor} target="_blank" href={"https://www.youtube.com/channel/UCMuVmUfK1Hu9_zDXvOw5nYw"}>  <YoutubeFilled  className={styles.icons} /></a>
    </div>
  </div>;
}
