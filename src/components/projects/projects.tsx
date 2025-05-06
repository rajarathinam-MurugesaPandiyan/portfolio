import styles from '@/components/projects/project.module.css'
import Hastag from '../hashtag/hastag'
import { useLottie } from 'lottie-react';
import * as animationData from "@/images/intro.json";


export default function Projects() {


    return <div id="Skills" className={styles.projects_main}>
        <div className={styles.project_header}>
            <div className={styles.project_style}>
                <Hastag logo="#" />
                Projects <span className={styles.border}></span>
            </div>
        </div>
        <div>

        </div>


    </div>
}