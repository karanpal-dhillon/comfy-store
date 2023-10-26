import { useLoaderData } from "react-router-dom"

const SingleProductItem = () => {
  const { product } = useLoaderData();
  const { title, price, image, description, company, colors } = product.attributes;
  console.log(colors)
  console.log(product)
  return (
    <div>SingleProductItem</div>
  )
}

export default SingleProductItem
