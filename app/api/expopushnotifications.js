/** @format */

const { default: api } = require("./client");

const url = "expoPushTokens";
const registernotifications = async (r) => api.post(url, { token: r });

export default {registernotifications};
