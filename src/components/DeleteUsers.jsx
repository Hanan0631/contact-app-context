//React
import { useContext } from "react";

//Context
import { UserContext } from "../context/UserProvider";

//Styles
import styles from "./DeleteUsers.module.css";

const DeleteUsers = ({ checkedUsers }) => {
  const deleteSelectedHandler = () => {
    if (checkedUsers.length) {
      dispatch({type: "DELETE_SELECTED_USERS", payload: checkedUsers})
    }
    dispatch({ type: "HIDE_MODAL" });
  };

  const { users, dispatch } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <div className={styles.deleteBox}>
        <h3>Are you sure you want to Delete</h3>
        <div className={styles.buttons}>
          <button onClick={() => dispatch({ type: "HIDE_MODAL" })}>
            Cancel
          </button>
          <button onClick={deleteSelectedHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUsers;
