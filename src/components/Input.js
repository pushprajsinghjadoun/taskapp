import React, {useState} from 'react'
import styles from './Inputs.module.css'
import validator from 'validator'


function Input()
{
    const [names, setName] = useState({});
    const [namebool,setnamebool] = useState(false);
    const [emailbool,setemailbool] = useState(false);
    const [phonebool,setphonebool] = useState(false);
    const [passwordbool,setpasswordbool] = useState(false);
    const myinput = [{
        type: 'text',
        placeholder: 'Name',
        className: 'inputs',
        name:'name',
        correctinput:namebool,
        message: 'Pleaase Enter Correct Name'
    },
    {
        type: 'email',
        placeholder: 'Email',
        className: 'inputs',
        name:'email',
        correctinput:emailbool,
        message: 'Pleaase Enter Correct Email'
    },
    {
        type: 'tel',
        placeholder: 'Phone Number',
        className: 'inputs',
        name:'phone',
        correctinput:phonebool,
        message: 'Pleaase Enter Correct Phone Number'
    },
    {
        type: 'password',
        placeholder: 'Password',
        className: 'inputs',
        name:'password',
        correctinput:passwordbool,
        message: 'Pleaase Enter Correct Password'
    },
];

const formhandler = (e)=>
{
    e.preventDefault()
    if(!namebool&& !emailbool && !phonebool && !passwordbool)
    {
        console.log(names);
    }else
    {
        alert('Enter Correct Value')
    }
    
}

const changehandle = (e)=>{
    
    const name = e.target.name;
    const value = e.target.value;

    if(name==='name')
    {
        if(validator.isInt(value))
        {
            console.log("Please Enter correct name")
            setnamebool(true)
        }else if(namebool)
        {
            setnamebool(false)
        }
    }

    if(name==='email')
    {if
        (!validator.isEmail(value))
        {
            console.log("Please Enter correct email")
            setemailbool(true)
        }else if(emailbool)
        {
            setemailbool(false)
        }
    }

    if(name==='phone')
    {
        if(!validator.isMobilePhone(value))
        {
            console.log("Please Enter correct Phone")
            setphonebool(true)
        }else if(setphonebool)
        {
            setphonebool(false)
        }
    }

    if(name==='password')
    {
        if (!validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
            })) {
            setpasswordbool(true)
            } else if(setpasswordbool) {
            setpasswordbool(false)
            }
    }



    setName(values=>({...values, [name]: value}))
    console.log(names);
}



return (
    <React.Fragment>
    <form >
    {
        myinput.map((item,index)=>{
            return (
                <div key={index}>
                <input name={item.name} type={item.type} placeholder={item.placeholder} onKeyUp={changehandle} className={styles.inputs}  autoComplete={'off'}></input>
                <span className={item.correctinput? styles.span : styles.hidde}>{item.message}</span>
                </div>
            );
        })
    }
    <button type={'submit'} onClick={formhandler} className={styles.button}>Submit</button>
    </form>
    </React.Fragment>
);
}

export default Input;