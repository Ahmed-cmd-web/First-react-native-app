/** @format */

import { create } from "apisauce";
import { date } from "yup/lib/locale";
import Storage from "../auth/Storage";
import settings from "../config/settings";
import Cache from "../utilities/Cache";

const api = create({
  baseURL: settings.APIURL,
});

const get = api.get;

api.addAsyncRequestTransform(async (r) => {
  const res = await Storage.gettoken();
  if (!res) return;
  r.headers["x-auth-token"] = res;
});

api.get = async (url, params, config) => {
  const res = await get(url, params, config);
  if (res.ok) {
    await Cache.store(url, res.data);
    return res;
  }

  const data = await Cache.get(url);

  return data ? { ok: true, data } : res;
};

export default api;
