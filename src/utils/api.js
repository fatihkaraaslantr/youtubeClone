import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "9a57d7b92amsh57e2f2bfba95309p1fe7a5jsne38940fdc801",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
