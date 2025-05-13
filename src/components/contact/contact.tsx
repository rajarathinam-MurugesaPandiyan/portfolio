

import styles from './contact.module.css'
import Image from "next/image";
import callIcon from '../../images/call.gif'
import mailIcon from '../../images/email-file.gif'
import Hastag from '../hashtag/hastag';
import CustomButton from '../custom/custom_button';
import TitleHeader from '../title_header';
import ContactAnimation from '@/animations/contact_animation';


export default function Contact() {
    return (
        <div id='Connect' className={styles.contact_main}>
            <div className={styles.header_wrapper}>
                <TitleHeader title_name='Contact' />
            </div>
            <div className={styles.form}>
                <div className={styles.form_left}>
                    <ContactAnimation css={styles.contact_animation} />
                </div>
                <div className={styles.form_right}>
                    <input className={styles.name_input} type="text" placeholder='Name *' />
                    <input className={styles.name_input} type="text" placeholder='Email *' />
                    <input className={styles.name_input} type="text" placeholder='Phone Number' />
                    <textarea className={styles.textArea} placeholder='Your Message' />
                    <CustomButton buttonName='Send Message' />
                </div>
            </div>
        </div>
    )
}