/** @format */

import * as Securestore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "Authtoken";
const settoken = async (v) => {
  try {
    await Securestore.setItemAsync(key, v);
  } catch (error) {
    console.log(error);
  }
};

const gettoken = async () => {
  try {
    return await Securestore.getItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};
const getUser = async () => {
  try {
    const res = await gettoken();
    return res && jwtDecode(res);
  } catch (error) {}
};
const removetoken = async () => {
  try {
    return await Securestore.deleteItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};

export default {
  gettoken,
  settoken,
  getUser,
  removetoken,
};
