// import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Navbar.module.css'
export default function Navbar(props) {

    return (

        <nav class={styles.navbar}>
            <div class="container-fluid">
                <div className={styles.row}>
                    <div className="logo">
                        <h2>My Web</h2>
                    </div>
                    <div className={styles.button}>
                        <button onClick={() => { props.setcurrentposition(0) }}>Datalist</button>
                        <button onClick={() => { props.setcurrentposition(1) }}>DataForm</button>
                    </div>
                </div>
            </div>
        </nav>

    )

}