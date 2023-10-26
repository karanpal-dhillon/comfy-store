import { useLoaderData } from "react-router-dom";
import { customAxios } from "../utils";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await customAxios.get(`/products/${id}`)
  const product = response.data.data;
  return { product }
}
const SingleProduct = () => {
  const product = useLoaderData()
  console.log(product)
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct
