import axios from "axios";
const url = "http://localhost:3000";

export const baseUrl = axios.create({
  baseURL: url,
});
