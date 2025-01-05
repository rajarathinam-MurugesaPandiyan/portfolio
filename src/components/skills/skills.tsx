import styles from "./skills.module.css";
import Image, { StaticImageData } from "next/image";
import js from "../../images/js.png";
import dart from "../../images/dart.png";
import ts from "../../images/ts.png";
import go from "../../images/go.png";
import flutter from "../../images/flutter.png";
import reactIcons from "../../images/react.png";
import nextIcons from "../../images/next_transparent.png";
import node from "../../images/node.png";
import git from "../../images/git.png";
import firebase from "../../images/firebase.png";
import mongo from "../../images/mongo.png";
import maria from "../../images/maria.jpg";
import Hastag from "../hashtag/hastag";

interface SkillStruct {
  skill: String;
  imageUrl: StaticImageData;
  skillDesc: String;
  rating: number;
}

let skills: SkillStruct[] = [
  {
    skill: "Flutter",
    imageUrl: flutter,
    rating: 4,
    skillDesc:
      "🎩✨ Flutter magician turning code into sleek, cross-platform apps! 🧩 Master of widgets, APIs, and bug-busting with a dash of creative flair. 🚀🎉",
  },
  {
    skill: "Dart",
    rating: 4,
    imageUrl: dart,
    skillDesc: "🎯 Dart ninja crafting clean, efficient code! 🚀 Master of classes, async magic, and turning ideas into lightning-fast apps with style and precision. 💻✨",
  },
  {
    skill: "React Js",
    rating: 4,
    imageUrl: reactIcons,
    skillDesc: "⚛️ React wizard conjuring dynamic, user-friendly web apps! 🎨 Master of components, hooks, and state, making the web interactive one line at a time. 🚀💻",
  },
  {
    skill: "Next Js",
    rating: 4,
    imageUrl: nextIcons,
    skillDesc: "🚀 Next.js navigator building blazing-fast, SEO-friendly web apps! 🌐 Master of SSR, API routes, and dynamic pages, turning ideas into scalable solutions. ⚡✨",
  },
  {
    skill: "JavaScript",
    imageUrl: js,
    rating: 4,
    skillDesc: "🛠️ JavaScript juggler creating magic across the web! 🌟 Master of DOM, async tricks, and making browsers dance with interactive brilliance. 🎭💻",
  },

  {
    skill: "Go Lang",
    imageUrl: go,
    skillDesc: "🐹 Go guru crafting lightning-fast, scalable backend magic! 🚀 Master of goroutines, APIs, and clean code, building rock-solid solutions with efficiency. 💻✨",
    rating: 4,
  },
  {
    skill: "Mongo DB",
    imageUrl: mongo,
    rating: 4,
    skillDesc: "🍃 MongoDB maestro managing data like a pro! 📊 Master of NoSQL, flexible schemas, and lightning-fast queries for seamless, scalable solutions. 🚀💾",
  },
  {
    skill: "Maria DB",
    imageUrl: maria,
    rating: 4,
    skillDesc: "🔧 MariaDB master optimizing relational databases with precision! 🗄️ Expert in complex queries, schema design, and ensuring fast, reliable data storage. 🚀💻",
  },
  // {
  //   skill: "Next",
  //   imageUrl: reactIcons,
  // },
  // {
  //   skill: "Node",
  //   imageUrl: node,
  // },
  // {
  //   skill: "Git",
  //   imageUrl: git,
  // },
  // {
  //   skill: "Firebase",
  //   imageUrl: firebase,
  // },
];

export default function Skills() {
  return (
    <div id="Skills" className={styles.skills_main}>
      <div className={styles.skills_header}>
        <div className={styles.skill_style}>
          <Hastag logo="#" />
          skills <span className={styles.border}></span>
        </div>
        <div className={styles.view_all}>{"View all"} </div>
      </div>

      <div className={styles.skills_body}>
        <div className={styles.grid_container}>
          {skills.map((e, i) => (
            <div className={styles.card}>
              <div className={styles.card_header}>
                <div key={i} className={styles.grid_item}>
                  <Image
                    draggable="false"
                    className={styles.js}
                    src={e.imageUrl}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <div className={styles.skills}>{e.skill}</div>
              </div>
              <div className={styles.card_body}>
                <div className={styles.skill_desc}>{e.skillDesc}</div>
                <div className={styles.rating} > Skill meter - {e.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
