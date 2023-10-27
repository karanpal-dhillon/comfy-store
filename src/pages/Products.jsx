import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customAxios } from "../utils";
const PRODUCTS_URL = `/products`;

export const loader = async () => {
  const response = await customAxios.get(PRODUCTS_URL);
  return { products: response.data.data, meta: response.data.meta };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;
