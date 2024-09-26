import axios from "axios";

const BASE_URL = "http://localhost:3000";

const deleteSelected = ([...id]) =>
  axios.all([...id].map((item) => axios.delete(`${BASE_URL}/users/${item}`)));

const addUser = (data) => axios.post(`${BASE_URL}/users`, data);

const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`);

const getUsers = () => axios.get(`${BASE_URL}/users`);

const editUser = (id, data) => axios.patch(`${BASE_URL}/users/${id}`, data);

export { getUsers, addUser, editUser, deleteUser, deleteSelected };
