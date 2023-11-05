import Hero from "../components/Hero";
import { customAxios } from "../utils";
import { FeaturedProducts } from "../components";

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => {
    return customAxios.get("/products?featured=true");
  },
};
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
