import axios from "axios";

axios.interceptors.request.use((data) => {
  data.baseURL = "http://localhost:8080/";
  return data;
});

export default axios;
