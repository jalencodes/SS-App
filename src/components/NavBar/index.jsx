import {Link} from 'react-router-dom'
import styles from "./NavBar.module.css"
import { useState, useContext } from 'react'


export default function NavBar() {

    const[signedIn, setSignedIn] = useState(false)

    return (
        <div className={styles.nav}>
            <Link to="/concerts" className={styles.a}>Concerts</Link>
            <Link to="/"><h1>Setlist Seekers</h1></Link>
            <Link to="/signin" className={styles.a}>
                {signedIn ? 'Sign out' : 'Sign in'}
            </Link>
        </div>
    )
}