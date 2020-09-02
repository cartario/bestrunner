import axios from "axios";

export const api = axios.create({
  baseURL: `https://reqres.in/api`,
  timeout: 1000 * 5,
  withCredentials: false,
});
