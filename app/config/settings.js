/** @format */

import Constants from "expo-constants";

const settings = {
  dev: {
    APIURL: "http://192.168.100.93:9000/api",
  },
  staging: {
    APIURL: "http://192.168.100.93:9000/api",
  },
  production: {
    APIURL: "http://192.168.100.93:9000/api",
  },
};

const getset = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.production;
};


export default getset()