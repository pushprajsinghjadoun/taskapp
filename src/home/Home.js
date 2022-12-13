import React from 'react'
import styles from './Home.module.css'
import Taskdata from './Taskdata';
function Home()
{
    const formhandle = (e)=>{
        e.preventDefault();
    }
    return (
        <React.Fragment>
        <h1 className={styles.heading}>Task App</h1>
        <div className={styles.inputbox}>
        <form onSubmit={formhandle}>
        <input type={'text'} placeholder='Title' className={styles.titleinput} required></input>
        <input type={'text'} placeholder='Description' className={styles.descriptioninput}  required></input>
        <button type={'submit'} className={styles.inputbutton}>Add Task</button>
        </form>
        </div>
        <Taskdata/>
        </React.Fragment>
    );
}
export default Home;