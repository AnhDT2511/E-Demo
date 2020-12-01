import axios from "axios";

const baseURL = "http://face-api.aeyes.tech";

// ALL DEFAULT CONFIGURATION HERE
export const anestAxios = axios.create({
  baseURL,
});
