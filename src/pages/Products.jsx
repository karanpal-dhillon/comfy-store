import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customAxios } from "../utils";
const PRODUCTS_URL = `/products`;

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customAxios.get(PRODUCTS_URL, {
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
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
