import styles from '@/components/hashtag/hastag.module.css'


interface HastagProps {
    logo: string;
}

export default function Hastag({ logo }: HastagProps) {
    return <span className={styles.hashtag}>{logo}</span>
}