/** @format */

const { default: api } = require("./client");

const url = "/messages";
const messages = async (message, listingId) =>
  await api.post(url, {
    message,
    listingId,
  });

export default { messages };
