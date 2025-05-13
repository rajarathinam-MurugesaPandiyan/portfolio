import styles from '@/components/atoms/title_header.module.css'
import Hastag from './hashtag/hastag'



export default function TitleHeader({ title_name }: { title_name: string }) {
    return <div className={styles.header}>
        <div className={styles.header_name}>
            <Hastag logo="#" />
            {title_name} <span className={styles.border}></span>
        </div>
    </div>
}