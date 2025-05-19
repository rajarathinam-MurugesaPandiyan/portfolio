import styles from "./skills.module.css";
import Hastag from "../hashtag/hastag";
import {
  SiApachekafka,
  SiDart,
  SiElasticsearch,
  SiFirebase,
  SiFlutter,
  SiGin,
  SiGit,
  SiGo,
  SiJavascript,
  SiMariadb,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { ReactNode } from "react";
import TitleHeader from "../title_header";

interface SkillStruct {
  skill: String;
  imageUrl: ReactNode;
}

let skills: SkillStruct[] = [
  {
    skill: "Flutter",
    imageUrl: (
      <SiFlutter
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Dart",

    imageUrl: (
      <SiDart
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "React",

    imageUrl: (
      <SiReact
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "JavaScript",
    imageUrl: (
      <SiJavascript
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Next",
    imageUrl: (
      <SiNextdotjs
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "TypeScript",
    imageUrl: (
      <SiTypescript
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },

  {
    skill: "Go",
    imageUrl: (
      <SiGo
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Mongo",
    imageUrl: (
      <SiMongodb
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Maria",
    imageUrl: (
      <SiMariadb
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Node",
    imageUrl: (
      <SiNodedotjs
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Git",
    imageUrl: (
      <SiGit
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Firebase",
    imageUrl: (
      <SiFirebase
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "GIN",
    imageUrl: (
      <SiGin
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Kafka",
    imageUrl: (
      <SiApachekafka
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
  {
    skill: "Elastic",
    imageUrl: (
      <SiElasticsearch
        size={30}
        color="#c778dd98"
        style={{ backgroundColor: "transparent" }}
      />
    ),
  },
];

export default function Skills() {
  return (
    <div id="Skills" className={styles.skills_main}>
      <TitleHeader title_name="Skills" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "c778dd98",
        }}
      >
        <div className={styles.grid_container}>
          {skills.map((e, i) => (
            <div key={i} className={styles.card}>
              <div
                style={{
                  backgroundColor: "transparent",
                  display: "flex",
                }}
              >
                {e.imageUrl}
                <div className={styles.skills}>{e.skill}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
