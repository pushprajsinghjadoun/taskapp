import React, {useState} from 'react'
import styles from './Home.module.css'
import Taskdata from './Taskdata';
function Home()
{
    const [names, setName] = useState({});
    const [triger,settriger] = useState(false);
   
    const changehandle = (e)=>{
        
        const name = e.target.name;
        const value = e.target.value;
        setName(values=>({...values, [name]: value}))
        const userid = localStorage.getItem('id');
        const userval = "userid"
        setName(values=>({...values, [userval]: userid}))
        console.log(names);
    }

    let checkval = localStorage.getItem('istrue');
    const formhandle = (e)=>{
        e.preventDefault();
        document.getElementById("input").value = '';
        document.getElementById("inputt").value = '';
        console.log(names);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(names)
        };
        fetch('http://localhost:5000/taskdata', requestOptions)
            .then(response => response.json())
            .then((data)=>
            {
                console.log(data);
                if(triger==true)
                {
                    settriger(false);
                } else if (triger==false)
                {
                    settriger(true);
                }
                console.log(triger);
                
            }).catch((e)=>{
                alert(e)
            });

            
    }
    return (
        <React.Fragment>
        {checkval? 
            <React.Fragment>
            <h1 className={styles.heading}>Task App</h1>
            <div className={styles.inputbox}>
            <form onSubmit={formhandle}>
            <input type={'text'} id="input" name='title'  placeholder='Title' onChange={changehandle} className={styles.titleinput} autoComplete="off" required></input>
            <input type={'text'} id="inputt" name='description'  placeholder='Description' onChange={changehandle} className={styles.descriptioninput} autoComplete="off"  required></input>
            <button type={'submit'} className={styles.inputbutton}>Add Task</button>
            </form>
            </div>
            <Taskdata triger={triger} />
            </React.Fragment>
            :
            <React.Fragment>
            <h1 className={styles.heading}>Login First</h1>
            </React.Fragment>
        }
        </React.Fragment>
    );
}
export default Home;