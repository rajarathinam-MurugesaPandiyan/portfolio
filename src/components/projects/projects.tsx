"use client";

import styles from "@/components/projects/project.module.css";
import Hastag from "../hashtag/hastag";
import { useRef } from "react";
import { ProjectProjects } from "./model/project_props";
import xpense from "@/images/xpense.png";
import portfolio from "@/images/portfolio.png";
import Image from "next/image";
import FloatingAnimation from "@/animations/floating";
import LiveAnimation from "@/animations/live";
import {
    MdKeyboardDoubleArrowRight,
    MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import InprogressAnimation from "@/animations/inprogress";
import TitleHeader from "../title_header";

const propData: ProjectProjects[] = [
    {
        name: "Xpense",
        link: "https://play.google.com/store/apps/details?id=com.ragogaxpense_tracker",
        image: xpense,
        stack: "Flutter , Dart",
        description:
            "Xpense is a personal finance app built to help users seamlessly track their daily expenses.",
        status: <LiveAnimation css={styles.live_button} />,
    },
    {
        name: "Portfolio",
        link: "https://rajarathinam-murugesapandiyan.github.io/portfolio/",
        image: portfolio,
        stack: "Next, JS",
        description:
            "Xpense is a personal finance app built to help users seamlessly track their daily expenses, manage budgets, and their spending habits.",
        status: <LiveAnimation css={styles.live_button} />,
    },
    {
        name: "Xpense - GO",
        link: "https://play.google.com/store/apps/details?id=com.ragogaxpense_tracker",
        image: xpense,
        stack: "Flutter , Dart",
        description:
            "Xpense is a personal finance app built to help users seamlessly track their daily expenses.",
        status: <InprogressAnimation css={styles.live_button} />,
    },
    {
        name: "Trello",
        link: "https://play.google.com/store/apps/details?id=com.ragogaxpense_tracker",
        image: xpense,
        stack: "Flutter , Dart",
        description:
            "Xpense is a personal finance app built to help users seamlessly track their daily expenses.",
        status: <LiveAnimation css={styles.live_button} />,
    },
];

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
        }
    };

    return (
        <div className={styles.projects_main}>
            <TitleHeader title_name="Projects" />
            <div className={styles.project_body}>
                <FloatingAnimation css={styles.floater} />
                <div className={styles.project_container}>
                    <div className={styles.left_right_button_container}>
                        <MdKeyboardDoubleArrowLeft
                            className={styles.left_right_button}
                            onClick={scrollLeft}
                        />
                        <MdKeyboardDoubleArrowRight
                            className={styles.left_right_button}
                            onClick={scrollRight}
                        />
                    </div>
                    <div className={styles.project_overall} ref={scrollRef}>
                        {propData.map((element, index) => (
                            <div
                                key={index}
                                className={styles.project_card}
                                onClick={() => window.open(element.link, "_blank")}
                            >
                                <div className={styles.image_border}>
                                    <div className={styles.image_container}>
                                        <Image
                                            className={styles.image_content}
                                            src={element.image}
                                            alt={"No image found"}
                                        />
                                    </div>
                                </div>
                                <div className={styles.project_details}>
                                    <div className={styles.project_name_wrapper}>
                                        <Hastag logo={"#"} />
                                        <div className={styles.name}>{element.name} </div>
                                        {element.status}
                                    </div>
                                    <div className={styles.description}>
                                        {element.description}
                                    </div>
                                    <div className={styles.stack}>
                                        {"Stack : "}
                                        {element.stack}
                                        {" </>"}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
