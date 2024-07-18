

import styles from './contact.module.css'
import Image from "next/image";
import callIcon from '../../images/call.gif'
import mailIcon from '../../images/email-file.gif'


export default function Contact() {
    return (
        <div className={styles.contact_main}>
            <div className={styles.form}>
                <div className={styles.form_left}>
                    <p className={styles.get_in_touch}>Get In Touch</p>
                    <p className={styles.get_in_touch_des}>Have a question or a project in mind? I&#39;d love to hear from you. Let&#39;s chat and make something amazing together.</p>
                    <br />
                    <div className={styles.call}>
                        <Image
                            draggable="false"
                            className={styles.callIcons}
                            src={callIcon}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                        <p className={styles.content}>8610068811</p>
                    </div>
                    <br />
                    <div className={styles.call}>
                        <Image
                            draggable="false"
                            className={styles.callIcons}
                            src={mailIcon}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                        <p className={styles.content}>rajamurugesan217@gmail.com</p>
                    </div>

                </div>
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