
import { MouseEventHandler } from "react";
import styles from "./custom_button.module.css";



export default function CustomButton({ buttonName  , onTap}: { buttonName: string , onTap : MouseEventHandler<HTMLButtonElement>  }) {
    return (
        <button className={styles.skills} onClick={onTap} >
            {buttonName}
        </button>
    )
}