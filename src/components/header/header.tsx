import styles from "./header.module.css";

let navigation_items: string[] = ["About", "Services", "Social", "Connect"];


export default function PortFolioHeader() {
    return <div className={styles.header_main}>
        <div className={styles.header}>
            <div>
                <p className={styles.logo}>Rajarathinam</p>
            </div>
            <div className={styles.navigation}>
                {navigation_items.map((e, i) => (
                    <div key={i} className={styles.navigation_item}>{e}</div>
                ))}
            </div>
        </div>
    </div>
}