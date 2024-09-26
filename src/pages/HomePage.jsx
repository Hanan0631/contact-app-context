//React
import { useContext } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//Components
import AddUser from "../components/AddUser";

//Context
import { UserContext } from "../context/UserProvider";

//Styles
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { users, dispatch } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Contact App</h2>
      <Link
        onClick={() => dispatch({ type: "GET_USERS", payload: users.data })}
        className={styles.showUsers}
        to="/users"
      >
        Show All Users
      </Link>
      <button
        className={styles.showModal}
        onClick={() => dispatch({ type: "SHOW_MODAL" })}
      >
        Add New User
      </button>
      {!!users.showModal && <AddUser />}
    </div>
  );
};

export default HomePage;
