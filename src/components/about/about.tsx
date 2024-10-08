import styles from "./about.module.css";

interface Stats {
  names: string;
  value: number;
}

let stats: Stats[] = [
  { names: "Projects Done", value: 7 },
  { names: "Years Of Experience", value: 2.8 },
  { names: "Clients", value: 4 },
];
export default function About() {
  return (
    <div id="About" className={styles.about_main}>
      <div className={styles.about_text}>About Me</div>
      <div className={styles.myself}>
        Im a software developer skilled in Dart, JavaScript, Golang. I build
        mobile apps for both Android and Ios using Flutter , dynamic web
        applications using React , Next js. Connect with me on GitHub and
        LinkedIn!
      </div>
      <div className={styles.stats_main}>
        {stats.map((e , i) => (
          <div key={i} className={styles.stats_content}>
            <p className={styles.stats_value}>{e.value}+</p>
            {e.names}
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}
