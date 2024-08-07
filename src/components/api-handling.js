import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blog-api-h1by.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { url } = config;

    if (!url.includes("/login")) { 
      const token = localStorage.getItem("token");
      
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
