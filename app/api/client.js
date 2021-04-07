import { create } from "apisauce";
import axios from "axios";

// const apiClient = create({
//   //baseURL: "http://192.168.26.226:9000/api",
//   baseURL: "https://cros-anywhere.herokuapp.com/http://192.168.26.226:8000/api",
//   headers: {
//     "Content-type": "application/json",
//     // Authorization: `Bearer ${token}`,
//     responseType: "json",
//     Accept: "application/json",
//     "Access-Control-Allow-Origin": " *"
//   }
// });

const apiClient = axios.create({
  baseURL: "http://192.168.26.226:8000/api",
  headers: {
    "Content-type": "application/json",
    //Authorization: `Bearer ${token}`,
    responseType: "json",
    Accept: "application/json"
  }
});

export default apiClient;

// baseURL: "https://cros-anywhere.herokuapp.com/http://192.168.26.226:9000/api"
