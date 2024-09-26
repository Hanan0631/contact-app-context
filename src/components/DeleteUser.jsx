//React
import { useContext } from "react";

//Context
import { UserContext } from "../context/UserProvider";

//Styles
import styles from "./DeleteUsers.module.css";

const DeleteUser = ({ id }) => {
    const { users, dispatch } = useContext(UserContext);
  const deleteHandler = () => {
    dispatch({ type: "DELETE_USER", payload: id });
    dispatch({ type: "HIDE_MODAL_DELETE_ONE" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.deleteBox}>
        <h3>Are you sure you want to Delete</h3>
        <div className={styles.buttons}>
          <button onClick={() => dispatch({ type: "HIDE_MODAL" })}>
            Cancel
          </button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
