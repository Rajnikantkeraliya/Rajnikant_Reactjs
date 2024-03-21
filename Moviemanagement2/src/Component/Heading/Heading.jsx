import styles from './Heading.module.css'
export default function Heading() {

    return (
        <div className={styles.Heading_Container}>
            <h1>Movie management</h1>
            <h5>You can See All Movie In this side</h5>
        </div>
    )
}