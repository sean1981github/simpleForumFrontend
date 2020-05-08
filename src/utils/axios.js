import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 10000,
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
