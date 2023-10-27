import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const dollarPrice = formatPrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="p-8 rounded-xl shadow-xl hover:shadow-2xl group flex flex-col sm:flex-row gap-y-4 flex-wrap
            bg-base-100 transition duration-300"
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-xl sm:h-32 sm:w-32 object-cover group-hover:scale-105"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="text-lg font-medium capitalize">{title}</h3>
              <h4 className="capitalize text-md text-neutral-content">
                {company}
              </h4>
            </div>
            <div className="ml-0 sm:ml-auto text-lg font-medium">
              {dollarPrice}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
