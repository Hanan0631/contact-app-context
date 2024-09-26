//React
import { createContext, useEffect, useReducer } from "react";

//Services
import {
  addUser,
  deleteSelected,
  deleteUser,
  editUser,
  getUsers,
} from "../services/config";

export const UserContext = createContext();

const initialState = {
  showModalDeleteOne: false,
  showModal: false,
  isLoading: false,
  data: [],
  error: "",
};

const usersReducer = (users, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...users,
        data: action.payload,
      };
    case "ADD_USER":
      addUser(action.payload);
      window.location.reload();
      break;
    case "EDIT_USER":
      editUser(action.payload[1], action.payload[0]);
      window.location.assign("http://localhost:5173/users");
      break;
    case "DELETE_USER":
      deleteUser(action.payload);
      window.location.reload();
      break;
    case "DELETE_SELECTED_USERS":
      deleteSelected(action.payload);
      window.location.reload();
      break;
    case "SHOW_MODAL_DELETE_ONE":
      return {
        ...users,
        showModalDeleteOne: true,
      };
    case "HIDE_MODAL_DELETE_ONE": {
      return {
        ...users,
        showModalDeleteOne: false,
      };
    }
    case "SHOW_MODAL":
      return {
        ...users,
        showModal: true,
      };
    case "HIDE_MODAL":
      return {
        ...users,
        showModal: false,
      };
    case "ERROR":
      return {
        ...users,
        error: action.payload,
      };
  }
};

function UserProvider({ children }) {
  const [users, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    getUsers().then((res) =>
      dispatch({ type: "GET_USERS", payload: res.data })
    );
  }, []);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
