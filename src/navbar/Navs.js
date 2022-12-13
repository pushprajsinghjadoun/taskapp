import React from 'react';
import react from 'react'
import {Outlet, Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navs()
{
    return (
        <React.Fragment>
        <ul className={styles.ul}>
        <li className={styles.li}>
        <Link className={styles.links} to="/home">Home</Link>
        </li>
        <li className={styles.li}>
        <Link className={styles.links} to="/login">About Us</Link>
        </li>
        <li className={styles.li}>
        <Link className={styles.links} to="/register">Logout</Link>
        </li>
        </ul>
        </React.Fragment>
    );
}
export default Navs;