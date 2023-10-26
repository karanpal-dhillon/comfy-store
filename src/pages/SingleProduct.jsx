import { customAxios } from "../utils";
import { useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await customAxios.get(`/products/${id}`)
  const product = response.data.data;
  return { product }
}

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { title, price, image, description, company, colors } = product.attributes;
  const dollarPrice = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li><Link to='/'> Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </div>
      <div className="grid gap-y-8 lg:gap-x-16 lg:grid-cols-2 mt-6">
        <img src={image} alt={title} className="h-96 w-96 lg:w-full rounded-lg object-cover" />
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">{company}</h4>
          <p className="mt-3 text-xl">{dollarPrice}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wide capitalize">Colors</h4>
            <div className="mt-2">
              {
                colors.map((color) => {
                  return <button key={color} style={{ background: color }}
                    className={`badge w-6 h-6 mr-2 ${color === productColor ? 'border-2 border-secondary' : ''}`}
                    onClick={() => setProductColor(color)}>
                  </button>
                })
              }
            </div>
          </div>
          <div className="mt-4">
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <select className="select select-bordered" value={amount} onChange={(e) => setAmount(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
