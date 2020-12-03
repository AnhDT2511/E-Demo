import axios from "axios";

//const baseURL = "http://face-api.aeyes.tech";
const baseURL = "https://973162dea8aa.ngrok.io";
//const baseURL = "http://localhost:8198";

// ALL DEFAULT CONFIGURATION HERE
export const fisAxios = axios.create({
  baseURL,
});
