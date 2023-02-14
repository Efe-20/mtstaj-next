const axios = require("axios").default;

const API_URL = process.env.API_URL;

const API = axios.create({
  baseURL: API_URL,
});

module.exports = API;
