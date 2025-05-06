

import styles from './contact.module.css'
import Image from "next/image";
import callIcon from '../../images/call.gif'
import mailIcon from '../../images/email-file.gif'
import Hastag from '../hashtag/hastag';


export default function Contact() {
    return (
        <div id='Connect' className={styles.contact_main}>
            <div className={styles.skills_header}>
                <div className={styles.skill_style}>
                    <Hastag logo="#" />
                    Get In Touch <span className={styles.border}></span>
                </div>
            </div>
            <div className={styles.form}>
                <p className={styles.get_in_touch}></p>
                <div className={styles.form_right}>
                    <input className={styles.name_input} type="text" placeholder='Name' />
                    <input className={styles.name_input} type="text" placeholder='Email' />
                    <input className={styles.name_input} type="text" placeholder='Phone Number' />
                    <textarea className={styles.textArea} placeholder='Your Message' />
                    <button className={styles.send_message}>Send Message</button>
                </div>

            </div>

        </div>
    )
}