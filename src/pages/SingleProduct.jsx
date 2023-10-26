import SingleProductItem from "../components/SingleProductItem";
import { customAxios } from "../utils";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await customAxios.get(`/products/${id}`)
  const product = response.data.data;
  return { product }
}
const SingleProduct = () => {
  return (
    <SingleProductItem />
  )
}

export default SingleProduct
