//React
import { useContext, useState } from "react";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//Context
import { UserContext } from "../context/UserProvider";

//Constants
import { inputs, regEmail, regName, regPhone } from "../constants/inputs";

//Styles
import styles from "./EditUser.module.css";

const EditUser = () => {
  const { id } = useParams();
  const { users, dispatch } = useContext(UserContext);
  const userToEdit = users.data?.find((user) => user.id === id);
  const [editedForm, setEditedForm] = useState(userToEdit);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditedForm({ ...editedForm, [name]: value });
  };

  const editHandler = () => {
    if (!editedForm?.name || !editedForm?.email || !editedForm?.phone) {
      dispatch({ type: "ERROR", payload: "Please fill the form." });
      return;
    }

    if (!regName.test(editedForm.name)) {
      dispatch({ type: "ERROR", payload: "Please enter a valid full name." });
      return;
    }

    if (!regEmail.test(editedForm.email)) {
      dispatch({ type: "ERROR", payload: "Please enter a valid email." });
      return;
    }

    if (!regPhone.test(editedForm.phone)) {
      dispatch({
        type: "ERROR",
        payload: "Please enter a valid phone number.",
      });
      return;
    }

    users.error = "";
    dispatch({ type: "EDIT_USER", payload: [editedForm, id] });
  };

  return (
    <div className={styles.container}>
      {!!editedForm &&
        inputs.map((input, index) => (
          <li className={styles.editInput} key={index}>
            <label htmlFor={input.name}>{input.placeholder}</label>
            <input
              type={input.type}
              name={input.name}
              id={input.name}
              placeholder={input.placeholder}
              value={editedForm[input.name]}
              onChange={changeHandler}
            />
          </li>
        ))}
      <Link
        className={styles.editButton}
        to={!users.error.length && "/users"}
        onClick={editHandler}
      >
        Edit User
      </Link>
      {!!users.error && <p className={styles.error}>{users.error}</p>}
    </div>
  );
};

export default EditUser;
