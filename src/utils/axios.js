import axios from "axios";

const instance = axios.create({
  baseURL: "https://simple-forum-backend.herokuapp.com",
  timeout: 10000,
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
