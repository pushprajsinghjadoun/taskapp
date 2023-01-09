import React from 'react'
import styles from './Loginbox.module.css'
import LoginInput from './LoginInput'
import {Link} from 'react-router-dom'
function Loginbox(props)
{
    function changevalue(newvalue)
    {
        props.onClicks(newvalue)
    }
    return (
        <div className={styles.card}>
        <LoginInput log={props.log} onClicks={changevalue} />
        <Link to='/register' className={styles.links}>Register Here</Link>
        </div>
    );
}
export default Loginbox;