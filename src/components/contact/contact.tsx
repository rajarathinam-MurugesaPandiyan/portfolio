"use client";

import styles from "./contact.module.css";
import CustomButton from "../custom/custom_button";
import TitleHeader from "../title_header";
import { ChangeEvent, useState } from "react";
import dynamic from "next/dynamic";

const ContactAnimation = dynamic(() => import("@/animations/contact_animation"), {
  ssr: false,
});


export default function Contact() {
    const [formData, setFormData] = useState({
        username: "",
        phonenumber: "",
        email: "",
        note: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    return (
        <div id="Connect" className={styles.contact_main}>
            <div className={styles.header_wrapper}>
                <TitleHeader title_name="Contact" />
            </div>
            <div className={styles.form}>
                <div className={styles.form_left}>
                    <ContactAnimation css={styles.contact_animation} />
                </div>
                <div className={styles.form_right}>
                    <input
                        className={styles.name_input}
                        name="username"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="Name *"
                    />
                    <input
                        className={styles.name_input}
                        type="text"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        placeholder="Email *"
                    />
                    <input
                        className={styles.name_input}
                        type="text" // important!
                        name="phonenumber"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        value={formData.phonenumber} // from useState
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d{0,10}$/.test(val)) {
                                handleChange(e);
                            }
                        }}
                        placeholder="Phone Number"
                    />
                    <textarea name="note" className={styles.textArea}
                        placeholder="Type Your Message"
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                    <CustomButton
                        buttonName="Send Message"
                        onTap={() => console.log(formData)}
                    />
                </div>
            </div>
        </div>
    );
}
