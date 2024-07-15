import styles from "./service.module.css";
import coding from "../../images/coding.gif";
import spyBug from "../../images/spyware.gif";
import security from '../../images/online-security.gif'
import update from '../../images/update.gif'
import Image, { StaticImageData } from "next/image";

interface ServiceStruct {
    names: String;
    iconData: StaticImageData;
    content: String;
}

let serviceConstants: ServiceStruct[] = [
    {
        names: "Code",
        iconData: coding,
        content:
            "I specialize in mobile,web development and design, creating visually appealing, user-friendly digital experiences.",
    },
    {
        names: "Testing",
        iconData: spyBug,
        content:
            "I can write unit test cases for applications and maintain quality app, with less bugs in the applications.",
    },
    {
        names: "Security",
        iconData: security,
        content:
            "Skilled in secure coding and web , app development, Make litte hard to crack for the hackers.",
    },
    {
        names: "Updates",
        iconData: update,
        content:
            "I can update the versions for applications and maintain quality app, with high performance and upto date.",
    },
];

export default function Services() {
    return (
        <div className={styles.service_main}>
            <div className={styles.service_text}>Services</div>
            <div className={styles.services_des}>
                Explore my web and app services, from user interface and experience by
                coding and testing. Let's craft exceptional digital experiences
                together.
            </div>

            <div className={styles.service_content}>
                {serviceConstants.map((e , i) => (
                    <div key={i} className={styles.service_single}>
                        <Image
                            draggable="false"
                            src={e.iconData}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                        <p className={styles.service_names}>{e.names}</p>
                        <br />
                        <p>{e.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
