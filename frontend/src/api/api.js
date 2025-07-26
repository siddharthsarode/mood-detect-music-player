import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_APP_NODE_ENV !== "development"
      ? import.meta.env.VITE_APP_BASE_URL
      : "http://localhost:3000",
});

export default instance;
