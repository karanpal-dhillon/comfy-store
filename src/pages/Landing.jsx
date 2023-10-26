import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import { customAxios } from '../utils'
import { FeaturedProducts } from "../components";

export const loader = async () => {
  const response = await customAxios.get('/products?featured=true')
  const products = response.data.data;
  return { products }

}
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
