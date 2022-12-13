import React, {useState} from 'react'
import styles from './Loginbox.module.css'

function LoginInput()
{
    const [names, setName] = useState({});

    const myinput = [
    {
        type: 'email',
        placeholder: 'Email',
        className: 'inputs',
        name:'email'
    },
    {
        type: 'password',
        placeholder: 'Password',
        className: 'inputs',
        name:'password'
    },

];
const changehandle = (e)=>{
    
    const name = e.target.name;
    const value = e.target.value;
    setName(values=>({...values, [name]: value}))
    console.log(names);
}
const formhandler = (e)=>
{
    e.preventDefault();
    console.log('dfgds')
}

    return (
        <React.Fragment>
        <br></br>
        <br/> <br/> <br/>
        <h1 className={styles.center_text+ ' '+ styles.heading}>Login Here</h1> <br></br>

        <form onSubmit={formhandler}>
    {
        myinput.map((item,index)=>{
            return (
                <div key={index}>
                <input name={item.name} type={item.type} placeholder={item.placeholder} onChange={changehandle} className={styles.inputs}  autoComplete={'off'}></input>
                </div>
            );
        })
    }
    <button type={'submit'}  className={styles.button}>Submit</button>
    </form>


        </React.Fragment>
    );
}
export default LoginInput