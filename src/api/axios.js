import axios from "axios";

export default axios.create({
  baseURL: "https://server-openlink-production.up.railway.app",
  withCredentials: true,
});

export const axiosPrivateInstance = axios.create({
  baseURL: "https://server-openlink-production.up.railway.app",
});
