import axios from "axios";

const PRODUCTION_URL = `https://strapi-store-server.onrender.com/api`
export const customAxios = axios.create({
  baseURL: PRODUCTION_URL
})
