import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customAxios } from "../utils";
const PRODUCTS_URL = `/products`;

export const loader = async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const response = await customAxios.get(PRODUCTS_URL, {
    params
  });
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
