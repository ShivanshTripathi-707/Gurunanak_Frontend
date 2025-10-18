import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
  // const url = "https://gurunanak-backend.onrender.com";
  const url = "http://localhost:3000";
  const [loggedIn, setLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken") || null);

  axios.defaults.withCredentials = true;

  // ✅ Fetch login state using cookie (and token if stored)
  async function fetchLoginState() {
    try {
      const res = await axios.get(`${url}/api/user/authenticated`);
      if (res.data.success) {
        setLoggedIn(true);

        // If server sends token (optional), save it
        if (res.data.token) {
          localStorage.setItem("userToken", res.data.token);
          setUserToken(res.data.token);
        }
      } else {
        setLoggedIn(false);
        localStorage.removeItem("userToken");
        setUserToken(null);
      }
    } catch (error) {
      console.log("Fetch login state error:", error);
      setLoggedIn(false);
      localStorage.removeItem("userToken");
      setUserToken(null);
    }
  }

  // ✅ Handle login — call this after successful login API
  const handleLogin = (token) => {
    localStorage.setItem("userToken", token);
    setUserToken(token);
    setLoggedIn(true);
  };

  // ✅ Handle logout — clear cookie and localStorage
  const handleLogout = async () => {
    try {
      const res = await axios.get(`${url}/api/user/logout`);
      if (res.data.success) {
        localStorage.removeItem("userToken");
        setUserToken(null);
        setLoggedIn(false);
      }
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  useEffect(() => {
    fetchLoginState();
  }, []);

  const value = {
    url,
    loggedIn,
    setLoggedIn,
    userToken,
    handleLogin,
    handleLogout,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
