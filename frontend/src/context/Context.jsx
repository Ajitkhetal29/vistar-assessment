import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = "http://localhost:5000";
  const navigate = useNavigate();

  const [activeCustomers, setActiveCustomers] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  // handle logout
  const handlelogout = async () => {
    try {
      await signOut(auth);
      console.log("Loged out");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  //   fetch active users
  const fetchActiveCustomers = async () => {
    try {
      const response = await axios.get(backendUrl + "/getActiveUser");
      if (response.data.success) {
        setActiveCustomers(response.data.activeCustomers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    auth,
    backendUrl,
    fetchActiveCustomers,
    activeCustomers,
    handlelogout,
    allTransactions,
    setAllTransactions,
    navigate,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
