//react-router-dom
import { Route, Routes } from "react-router-dom";

//Context
import UserProvider from "./context/UserProvider.jsx";

//Pages
import HomePage from "./pages/HomePage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import EditPage from "./pages/EditPage.jsx";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<EditPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
