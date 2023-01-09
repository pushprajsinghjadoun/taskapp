import React from 'react'
import styles from './Register.module.css'
import Inputbox from './Inputbox';
import { Link } from 'react-router-dom';
function Registration(props)
{
    function changevalue(newvalue)
    {
        props.onClicks(newvalue)
    }
    //console.log(props)
    return (
        <div className={styles.card}>
        <Inputbox log={props.log} onClicks={changevalue} />
        <Link to='/login' className={styles.links}>Already Register, Login Here</Link>
        </div>
    );
}
export default Registration;