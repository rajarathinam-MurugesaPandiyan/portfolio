"use client";
import { useRouter } from 'next/navigation'
import styles from "./header.module.css";
import { navigation_items } from '@/constants/constants';
import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined';

export default function PortFolioHeader() {
    const router = useRouter()


    function navigation(name: string) {
        router.push(`/${name}`)
    }

    return (
        <div className={styles.header_main}>
            <div className={styles.header}>
                <div>
                    <p className={styles.logo}>{"🆁"}</p>
                </div>
                <div className={styles.menuIcon}>
                    <MenuOutlined width={200} height={200} />
                </div>
                <div className={styles.navigation}>
                    {navigation_items.map((e, i) => (
                        <div
                            key={i}
                            onClick={(es) => navigation(e)}
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
