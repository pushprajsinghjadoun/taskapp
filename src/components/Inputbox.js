import React from 'react';
import styles from './Register.module.css'
import Inputs from './Input'
import { useEffect } from 'react';
function Inputbox(props)
{

//    console.log(props)
//    console.log("from inputbox")
let va = false;
useEffect(() => {
    //Runs only on the first render
    props.onClicks(false);
  }, []);

   function onChnage(newvalue)
   {   
        props.onClicks(false)
        props.onClicks(newvalue)
   }
   function myfun(e)
   {
    e.preventDefault();
    console.log(props)
    
   }

return (
    <React.Fragment>
    <br></br>
    <h1 className={styles.center_text+ ' '+ styles.heading}>Register Here</h1> <br></br>
    <Inputs log={props.log} onClicks={onChnage}></Inputs>
    </React.Fragment>
);
}

export default Inputbox;