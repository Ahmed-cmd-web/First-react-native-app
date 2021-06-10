/** @format */

import api from "./client";


const login = async (email, password) => await api.post("/auth", { email, password });

export default { login };
