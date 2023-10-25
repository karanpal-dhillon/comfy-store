import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import { customAxios } from '../utils'

export const loader = async () => {
  const response = await customAxios.get('/products?featured=true')
  return response.data;

}
const Landing = () => {
  const featuredProducts = useLoaderData();
  console.log(featuredProducts.data)
  return (
    <>
      <Hero />
    </>
  );
};

export default Landing;
