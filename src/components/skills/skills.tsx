import styles from "./skills.module.css";
import Image, { StaticImageData } from "next/image";
import js from "../../images/js.png";
import dart from "../../images/dart.png"
import ts from "../../images/ts.png"
import go from "../../images/go.png"
import flutter from "../../images/flutter.svg"
import reactIcons from "../../images/react.png"
import nextJs from "../../images/favicon.png";
import node from '../../images/node.png'
import git from '../../images/git.png'
import firebase from '../../images/firebase.png'
import mongo from '../../images/mongo.png'
import maria from '../../images/maria.jpg'

interface SkillStruct {
    skill: String;
    imageUrl: StaticImageData;
}

let skills: SkillStruct[] = [
    {
        skill: "Java Script",
        imageUrl: js,
    },
    {
        skill: "Type Script",
        imageUrl: ts,
    },
    {
        skill: "Dart",
        imageUrl: dart,
    },
    {
        skill: "Go Lang",
        imageUrl: go,
    },
    {
        skill: "Flutter",
        imageUrl: flutter,
    },
    {
        skill: "React",
        imageUrl: reactIcons,
    },
    {
        skill: "Next",
        imageUrl: nextJs,
    },
    {
        skill: "Node",
        imageUrl: node,
    },
    {
        skill: "Git",
        imageUrl: git,
    },
    {
        skill: "Firebase",
        imageUrl: firebase,
    },
    {
        skill: "Mongo DB",
        imageUrl: mongo,
    },
    {
        skill: "Maria DB",
        imageUrl: maria,
    },
];

export default function Skills() {
    return (
        <div className={styles.skills_main}>
            <div className={styles.skills_text}>Skills</div>
            <div className={styles.skills_des}>
                These Were the skills sets , I have Acquired in my 2.8 years of software
                development industry , been a mobile developer and web developer I have
                gained knowledge in both frontend and backend Technologies
            </div>
            <div className={styles.overall_grid}>
                {skills.map((e) => (
                    <div className={styles.grid_item}>
                        <Image
                            draggable="false"
                            className={styles.js}
                            src={e.imageUrl}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                        <br />
                        <p className={styles.skills}>{e.skill}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
