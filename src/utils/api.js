import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "648dda15b6msh1f39168b70d7fa6p1b7877jsn3537f2980da4",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
