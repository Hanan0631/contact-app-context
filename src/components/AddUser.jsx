//React
import { useContext, useState } from "react";

//Context
import { UserContext } from "../context/UserProvider";

//Constants
import { inputs, regEmail, regName, regPhone } from "../constants/inputs";

//styles
import styles from "./AddUser.module.css";

const AddUser = () => {
  const { users, dispatch } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value, id: Date.now().toString() });
  };

  const addHandler = () => {
    if (!form.name || !form.email || !form.phone) {
      dispatch({ type: "ERROR", payload: "Please fill the form." });
      return;
    }

    if (!regName.test(form.name)) {
      dispatch({ type: "ERROR", payload: "Please enter a valid full name." });
      return;
    }

    if (!regEmail.test(form.email)) {
      dispatch({ type: "ERROR", payload: "Please enter a valid email." });
      return;
    }

    if (!regPhone.test(form.phone)) {
      dispatch({
        type: "ERROR",
        payload: "Please enter a valid phone number.",
      });
      return;
    }

    users.error = "";
    dispatch({ type: "ADD_USER", payload: form });
    dispatch({ type: "HIDE_MODAL" });
  };

  return (
    <div className={styles.container}>
      <span
        className={styles.cross}
        onClick={() => dispatch({ type: "HIDE_MODAL" })}
      >
        X
      </span>
      <div className={styles.editBox}>
        {inputs.map((input, index) => (
          <li className={styles.addInput} key={index}>
            <label htmlFor={input.name}>{input.placeholder}</label>
            <input
              type={input.type}
              name={input.name}
              id={input.name}
              placeholder={input.placeholder}
              value={form[input.name]}
              onChange={changeHandler}
            />
          </li>
        ))}
        <button className={styles.addButton} onClick={addHandler}>
          Add User
        </button>
        {!!users.error && <p className={styles.error}>{users.error}</p>}
      </div>
    </div>
  );
};

export default AddUser;
