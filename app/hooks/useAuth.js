/** @format */

import jwtDecode from "jwt-decode";
import { useContext } from "react";
import Auth from "../auth/context";

const { default: Storage } = require("../auth/Storage");

const useAuth = () => {
  const { user, setuser } = useContext(Auth);
  const logout = () => {
    setuser(null);
    return Storage.removetoken();
  };

  const Authlogin = (token) => {
    Storage.settoken(token);
    const payload = jwtDecode(token);
    return setuser(payload);
  };

  


  return { user, logout, Authlogin };
};

export default useAuth;
