/** @format */

const { useState } = require("react");

const useApi = (func) => {
  const [listingsdata, setListingsdata] = useState([]);
  const [err, seterr] = useState(false);
  const [loading, setLoading] = useState(false);
  const load = async (...args) => {
    setLoading(true);
    const res = await func(...args);
    setLoading(false);

    seterr(!res.ok)
    setListingsdata(res.data);
    return res
  };

  return { load, listingsdata, err, loading };
};

export default useApi;
