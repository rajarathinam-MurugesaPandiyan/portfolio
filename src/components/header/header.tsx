"use client";
import { useRouter } from 'next/navigation'
import styles from "./header.module.css";
import { navigation_items } from '@/constants/constants';
import Hastag from '../hashtag/hastag';
import Image from 'next/image';
import menu from '@/images/menu.svg';

export default function PortFolioHeader() {
    const router = useRouter()


    function navigation(name: string) {
        router.push(`/${name}`)
    }

    return (
        <div className={styles.header_main}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Hastag logo='<<' />  {"Raja"} <Hastag logo='>>' />
                </div>
                <div className={styles.menuIcon}>
                    <Image
                        draggable="false"
                        className={styles.profile_pic}
                        src={menu}
                        alt="Picture of the author"
                    ></Image>
                </div>
                <div className={styles.navigation}>
                    {navigation_items.map((e, i) => (
                        <div
                            key={i}
                            onClick={(es) => navigation(e)}
                            className={styles.navigation_item}
                        >
                            <Hastag logo='#' /> {e}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
