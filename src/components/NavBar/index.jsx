import {Link} from 'react-router-dom'
import styles from "./NavBar.module.css"


export default function NavBar() {
    return (
        <div className={styles.nav}>
            <Link to="/concerts" className={styles.a}>Concerts</Link>
            <Link to="/"><h1>Setlist Seekers</h1></Link>
            <Link to="/signin" className={styles.a}>Sign-In</Link>
        </div>
    )
}