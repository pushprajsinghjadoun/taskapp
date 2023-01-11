import React, { useEffect, useState } from "react";
import styles from "./Task.module.css";
import GridLoader from "react-spinners/GridLoader";
import HashLoader from "react-spinners/HashLoader";

function Taskdata(props) {
  console.log(props)
  const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [del, setdel] = useState(true);

  const fetchData = () => {
    const usersid = localStorage.getItem("id");
    setloading(true);
    fetch("https://taskappbackend.vercel.app/gettaskdata/" + usersid)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setloading(false);
        setUsers(data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchData();
  }, [props.triger, del]);

  const handledelete = async (userid) => {
    setloading(true);
    fetch("https://taskappbackend.vercel.app/deletetask/" + userid, {
      method: "DELETE",
    })
      .then(() => {
        if (del == true) {
          setdel(false);
        } else if (del == false) {
          setdel(true);
        }
      })
      .catch((e) => {
        console.log("Somethings went wrong" + e);
      });
  };

  return (
    <div className={styles.taskbox}>
      <h1 className={styles.heading}>All Tasks</h1>

      <div className={styles.row}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th scope="col" className={styles.th}>
                Title
              </th>
              <th scope="col" className={styles.tha}>
                Description
              </th>
              <th scope="col" className={styles.thb}>
                Delete
              </th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {users.length > 0 && (
              <React.Fragment>
                {users.map((user) => (
                  <tr className={styles.tr} key={user._id}>
                    <td className={styles.td}>{user.title}</td>
                    <td className={styles.td}>{user.description}</td>
                    <td className={styles.td}>
                      {" "}
                      <button
                        className={styles.sbutton}
                        onClick={() => handledelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            )}
          </tbody>
        </table>
        <br></br>
      </div>
      <p className={loading || props.load ? styles.loader : styles.hide}><HashLoader color="#540375" /></p>
    </div>
  );
}
export default Taskdata;
