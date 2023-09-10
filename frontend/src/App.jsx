import React, { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./components/header/Navbar";
import MainRoutes from "./components/allRoutes/MainRoutes";
import { AuthContext } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { serverLink } from "./main";

function App() {
  const { isAuth, setIsAuth, setUser } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${serverLink}/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsAuth(true);
        setUser(res.data.user);
      })
      .catch((error) => {
        setIsAuth(false);
        setUser({});
      });
  }, [isAuth, setUser]);

  return (
    <>
      {isAuth ? (
        <>
          <Dashboard />
          <ToastContainer />
        </>
      ) : (
        <>
          <MainRoutes />
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
