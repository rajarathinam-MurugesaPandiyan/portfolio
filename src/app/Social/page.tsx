"use client";
import Image from "next/image";
import PortFolioHeader from "@/components/header/header";
import styles from "@/app/Projects/page.module.css";
import React from "react";




interface SocialDetails {
    name: string,
    imageUrl: string,
    url: string,
}

const project_details: SocialDetails[] = [
    {
        name: "Youtube",
        imageUrl: "https://en.followersnet.com/wp-content/uploads/2019/02/YouTube.png",
        url: ""
    },
    {
        name: "Trello",
        imageUrl: "",
        url: "Next JS"
    },
    {
        name: "Coming Soon",

        imageUrl: "",
        url: "Flutter"
    },
    {
        name: "Coming Soon",

        imageUrl: "",
        url: "GO"
    },
    {
        name: "Coming Soon",
        imageUrl: "",
        url: "Python"
    },
    {
        name: "Coming Soon",

        imageUrl: "",
        url: "Python"
    },
    {
        name: "Coming Soon",
        imageUrl: "",
        url: "Python"
    },

]


export default function SocialPage() {
    return <>
        <PortFolioHeader></PortFolioHeader>
        <div className={styles.projects_content}>
            <div className={styles.grid_container}>
                {project_details.map((e) =>
                    <div className={styles.card}>
                        <img
                            className={styles.profile_pic}
                            src={e.imageUrl}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div>{e.name}</div>

                    </div>
                )}
            </div>
        </div></>

}