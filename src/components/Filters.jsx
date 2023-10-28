import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import FormSelect from "./FormSelect";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const sortOptions = ["a-z", "z-a", "high", "low"];

const Filters = () => {
  const { meta } = useLoaderData();
  const { categories, companies } = meta;
  const [range, setRange] = useState(0);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        name="search"
        label="Search Product"
        size="input-sm"
      />
      <FormSelect
        name="category"
        label="Select Category"
        size="select-sm"
        list={categories}
      />

      <FormSelect
        name="company"
        label="Select Company"
        size="select-sm"
        list={companies}
      />

      <FormSelect
        name="sort"
        label="Sort By"
        size="select-sm"
        list={sortOptions}
      />

      <div>
        <label htmlFor="range" className="label flex justify-between">
          <p>Select Price</p>
          <p>${range}</p>
        </label>
        <input
          type="range"
          min={0}
          max="10000"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="range range-info"
        />
        <div className="flex justify-between text-sm font-semibold mt-2">
          <span>0</span>
          <span>Max: $1000.00</span>
        </div>
      </div>

      <div className="form-control items-center">
        <label className="cursor-pointer label">
          <span className="label-text">Free Shipping</span>
        </label>
        <input
          type="checkbox"
          checked="checked"
          className="checkbox checkbox-info"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
