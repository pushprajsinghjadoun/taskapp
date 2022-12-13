import React from 'react'
import styles from './Loginbox.module.css'
import LoginInput from './LoginInput'
function Loginbox()
{
    return (
        <div className={styles.card}>
        <LoginInput/>
        </div>
    );
}
export default Loginbox;