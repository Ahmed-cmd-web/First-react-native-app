/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { date } from "yup/lib/locale";
const prefix = "cache";
const expirytime = 5;
const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};
const isExpired = (v) => {
  const now = moment(Date.now());
  const itemtime = moment(v.timestamp);
  const isexpired = now.diff(itemtime, "minutes") > expirytime;
  return isexpired;
};

const get = async (key) => {
  try {
    const res = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(res);
    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);

      return console.log("item has expired");
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default { store, get };
