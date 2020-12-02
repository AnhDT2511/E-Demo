import axios from "axios";

//const baseURL = "http://face-api.aeyes.tech";
const baseURL = "https://973162dea8aa.ngrok.io";

// ALL DEFAULT CONFIGURATION HERE
export const anestAxios = axios.create({
  baseURL,
});
