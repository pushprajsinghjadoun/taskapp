import React from 'react'
import styles from './Logout.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Logout(props)
{
    const navigat = useNavigate()
    const [redir,setredir] = useState(false)
    if(redir)
    {
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        navigat('/register')
    }
    props.onClicks(false);
    // console.log(props)
    // setredir(true);
    return (
        <React.Fragment>
        <h1>hdfdf</h1>
        </React.Fragment>
    );
}
export default Logout;