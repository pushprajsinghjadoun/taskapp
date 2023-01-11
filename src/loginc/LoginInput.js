import React, { useState, useEffect } from "react";
import styles from "./Loginbox.module.css";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function LoginInput(props) {
  const navigat = useNavigate();
  const [redir, setredir] = useState(false);
  const [loading,setloading] = useState(false);
  useEffect(() => {
    if (redir) {
      navigat("/home");
    }
  }, [redir]);
  const [names, setName] = useState({});

  const myinput = [
    {
      type: "email",
      placeholder: "Email",
      className: "inputs",
      name: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      className: "inputs",
      name: "password",
    },
  ];
  const changehandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setName((values) => ({ ...values, [name]: value }));
    console.log(names);
  };
  const formhandler = (e) => {
    e.preventDefault();
    setloading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(names),
    };
    fetch("https://taskappbackend.vercel.app/users/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(props);
        console.log(data.user.email);
        setloading(false);
        localStorage.setItem("id", data.user._id);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("istrue", true);
        console.log(data);
        alert("Login Successfully");
        console.log(localStorage.getItem("name"));
        props.onClicks(true);
        setredir(true);
      })
      .catch((e) => {
        setloading(false);
        alert("Invalid Email and Password");
      });
  };

  return (
    <React.Fragment>
      <br></br>
      <br /> <br /> <br />
      <h1 className={styles.center_text + " " + styles.heading}>
        Login Here
      </h1>{" "}
      <br></br>
      <div className={loading ? styles.modalhidden : styles.fdf}>
    
    <p className={styles.loader}><HashLoader color="#540375" /></p>
    </div>
      <form onSubmit={formhandler}>
        {myinput.map((item, index) => {
          return (
            <div key={index}>
              <input
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                onChange={changehandle}
                className={styles.inputs}
                autoComplete={"off"}
              ></input>
            </div>
          );
        })}
        <button type={"submit"} className={styles.button}>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}
export default LoginInput;
