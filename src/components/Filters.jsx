import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import FormSelect from "./FormSelect";
import { useLoaderData } from "react-router-dom";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const sortOptions = ["a-z", "z-a", "high", "low"];

const Filters = () => {
  const { meta } = useLoaderData();
  const { categories, companies } = meta;

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

      <FormRange label="Select Price" name="price" size="range-sm" />

      <FormCheckbox label="Free Shipping" name="shipping" size="checkbox-sm" />
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
