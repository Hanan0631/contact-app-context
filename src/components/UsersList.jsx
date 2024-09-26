//React
import { useContext, useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//Components
import DeleteUsers from "./DeleteUsers";
import DeleteUser from "./DeleteUser";

//Context
import { UserContext } from "../context/UserProvider";

//Styles
import styles from "./UsersList.module.css";

const UsersList = () => {
  const { users, dispatch } = useContext(UserContext);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);

  const checkHandler = (event) => {
    const checkedId = event.target.value;
    if (event.target.checked) {
      setCheckedUsers([...checkedUsers, checkedId]);
    } else {
      setCheckedUsers(checkedUsers.filter((id) => id !== checkedId));
    }
  };

  const deleteHandler = () => {
    dispatch({ type: "SHOW_MODAL_DELETE_ONE" });
  };

  return (
    <ul className={styles.container}>
      {users.data.length ? (
        users.data?.map((user) => (
          <li className={styles.user} key={user.id}>
            <input
              type="checkbox"
              className={!!showCheckbox ? styles.active : styles.inactive}
              value={user.id}
              onChange={checkHandler}
            />
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <div>
              <button className={styles.deleteButton} onClick={deleteHandler}>
                Delete
              </button>
              <Link className={styles.editButton} to={`/users/${user.id}`}>
                Edit
              </Link>
              {!!users.showModalDeleteOne && <DeleteUser id={user.id} />}
            </div>
          </li>
        ))
      ) : (
        <h4>There is no user to show!</h4>
      )}

      {users.data.length ? (
        <div className={styles.buttons}>
          <Link className={styles.home} to="/">
            Go to Home Page
          </Link>
          <button
            className={`${styles.selectUsers} ${
              !!showCheckbox ? styles.inactive : StyleSheet.active
            }`}
            onClick={() => setShowCheckbox((showCheckbox) => !showCheckbox)}
          >
            Select Users to Delete
          </button>
          <button
            className={`${styles.deleteSelectedUsers} ${
              !!showCheckbox ? styles.active : styles.inactive
            }`}
            onClick={() => dispatch({ type: "SHOW_MODAL" })}
          >
            Delete Selected Users
          </button>
        </div>
      ) : (
        <Link className={`${styles.home} ${styles.noUser}`} to="/">
          Go to Home Page
        </Link>
      )}
      {!!users.showModal && <DeleteUsers checkedUsers={checkedUsers} />}
    </ul>
  );
};

export default UsersList;
