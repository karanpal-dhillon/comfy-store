import axios from "axios";

const PRODUCTION_URL = `https://strapi-store-server.onrender.com/api`
export const customAxios = axios.create({
  baseURL: PRODUCTION_URL
})

export const formatPrice = (price) => {
  const dollarAmount = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format((price / 100).toFixed(2));

  return dollarAmount
}
