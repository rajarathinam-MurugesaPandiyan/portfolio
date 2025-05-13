
import styles from "./custom_button.module.css";



export default function CustomButton({ buttonName }: { buttonName: string }) {
    return (
        <button className={styles.skills}>
            {buttonName}
        </button>
    )
}