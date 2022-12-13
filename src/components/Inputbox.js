import React from 'react';
import styles from './Register.module.css'
import Inputs from './Input'

function Inputbox()
{

   
    
return (
    <React.Fragment>
    <br></br>
    <h1 className={styles.center_text+ ' '+ styles.heading}>Register Here</h1> <br></br>
    <Inputs></Inputs>
    </React.Fragment>
);
}

export default Inputbox;