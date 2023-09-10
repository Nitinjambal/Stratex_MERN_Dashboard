import axios from "axios";
import React, { useContext } from "react";
import { BsSearch, BsJustify } from "react-icons/bs";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { serverLink } from "../../main";

const Header = ({ OpenSidebar }) => {
  const { setIsAuth, setLoader, loader, user } = useContext(AuthContext);

  const handleLogout = async () => {
    setLoader(true);
    try {
      const { data } = await axios.get(`${serverLink}/logout`, {
        withCredentials: true,
      });
      setLoader(false);
      setIsAuth(false);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>

      <div className="header-right">
        <button
          onClick={handleLogout}
          disabled={loader}
          className="text-white bg-cyan-600 p-2 b-r-2 rounded-md font-bold hover:bg-cyan-600 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
