import PortFolioHeader from "@/components/header/header";
import styles from "@/app/Projects/page.module.css";
import React from "react";


interface ProjectDetails {
    projectName: string,
    projectDescription: string,
    imageUrl: string,
    gitHubUrl: string,
    language: string

}

const project_details: ProjectDetails[] = [
    {
        projectName: "Portfolio",
        projectDescription: "This Portfolio website is made by Next JS with optimized components",
        imageUrl: "",
        gitHubUrl: "",
        language: "Next JS"
    },
    {
        projectName: "Trello",
        projectDescription: "",
        imageUrl: "",
        gitHubUrl: "",
        language: "React JS"
    },
    {
        projectName: "Coming Soon",
        projectDescription: "",
        imageUrl: "",
        gitHubUrl: "",
        language: "Flutter"
    },
    {
        projectName: "Coming Soon",
        projectDescription: "",
        imageUrl: "",
        gitHubUrl: "",
        language: "GO"
    },
    {
        projectName: "Coming Soon",
        projectDescription: "",
        imageUrl: "",
        gitHubUrl: "",
        language: "Python"
    },
    {
        projectName: "Coming Soon",
        projectDescription: "",
        imageUrl: "",
        gitHubUrl: "",
        language: "Python"
    },
    {
        projectName: "Coming Soon",
        projectDescription: "",
        imageUrl: "",
        gitHubUrl: "",
        language: "Python"
    },

]


export default function ProjectsPage() {
    return <>
        <div className={styles.projects_content}>
            <div className={styles.grid_container}>
                {project_details.map((e) =>
                    <div className={styles.card}>
                        <div>{e.projectName}</div>
                        <div>{e.projectDescription}</div>
                        <div>{e.language}</div>
                    </div>
                )}
            </div>
        </div></>

}