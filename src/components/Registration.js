import React from 'react'
import styles from './Register.module.css'
import Inputbox from './Inputbox';
import { Link } from 'react-router-dom';
function Registration()
{
    return (
        <div className={styles.card}>
        <Inputbox/>
        <Link to='/login' className={styles.links}>Already Register, Login Here</Link>
        </div>
    );
}
export default Registration;