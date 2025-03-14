import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "24de4f5f12msh44c06e3a5459dcap10c364jsna30a7820d735",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
