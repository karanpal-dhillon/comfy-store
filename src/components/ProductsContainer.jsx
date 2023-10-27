import { useLoaderData } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${layout === pattern
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
      }
`;
  };
  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} Product{totalProducts > 1 ? "s" : ""}
        </h4>
        <div className="flex gap-2">
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {layout === "grid" ? <ProductsGrid /> : <ProductsList />}
    </>
  );
};

export default ProductsContainer;
