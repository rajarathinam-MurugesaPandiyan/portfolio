"use client";
import styles from "./header.module.css";

let navigation_items: string[] = ["About", "Services", "Social", "Connect"];

function scrollToTargetAdjusted(name: string) {
    var element = document.getElementById(name);
    var headerOffset = 85;
    // scroll to your element
    element?.scrollIntoView(true);
    var offsetPosition = window.scrollY - headerOffset;

    window.scroll({
        top: offsetPosition,
        behavior: "smooth",
    });
}



export default function PortFolioHeader() {
    return (
        <div className={styles.header_main}>
            <div className={styles.header}>
                <div>
                    <p className={styles.logo}>Rajarathinam</p>
                </div>
                <div className={styles.navigation}>
                    {navigation_items.map((e, i) => (
                        <div
                            key={i}
                            onClick={(es) => scrollToTargetAdjusted(e)}
                            className={styles.navigation_item}
                        >
                            {e}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
