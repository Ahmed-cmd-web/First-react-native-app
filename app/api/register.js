/** @format */

import api from "./client";

const registerendpoint = "/users";
const register = async (email, password, name) =>
  await api.post(registerendpoint, { name, email, password });


export default {register}