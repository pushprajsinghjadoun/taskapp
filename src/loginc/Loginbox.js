import React from 'react'
import styles from './Loginbox.module.css'
import LoginInput from './LoginInput'
import {Link} from 'react-router-dom'
function Loginbox()
{
    return (
        <div className={styles.card}>
        <LoginInput/>
        <Link to='/register' className={styles.links}>Register Here</Link>
        </div>
    );
}
export default Loginbox;