import React from 'react';
import react from 'react'
import {Outlet, Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navs(props)
{
   
    const navigat = useNavigate()
    const [redirr,setRedirr] = useState(false)
    useEffect(()=>
    {
        console.log('gkfjgfgfgf')
        if(redirr)
        {
            console.log("fdjdkgjfkglfjgfklmhjvhjnmh")
            navigat('/register')
        }
    },[redirr])
    const handler = ()=>{
        console.log("working fine")
        localStorage.removeItem('id');
        localStorage.removeItem('name');
       localStorage.removeItem('istrue')
        setRedirr(true);
        //props.onClicks(false);
        console.log(redirr);
    }
    const username = localStorage.getItem('name');
    console.log(username)
    return (
        <React.Fragment>
        <ul className={styles.ul}>
        <li className={styles.li}>
        <Link className={styles.links} to="/home">Home</Link>
        </li>
        <li className={styles.li}>
        <Link className={styles.links} to="/about">About Us</Link>
        </li>
        <li className={styles.li}>
        <Link className={styles.links}  onClick={handler}>Logout</Link>
        </li>
        <li className={styles.li}>
        <Link className={styles.links} >{'        Hello,  ' + username}</Link>
        </li>
        
        </ul>
        </React.Fragment>
    );
}
export default Navs;