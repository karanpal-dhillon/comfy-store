import { formatPrice, generateAmountOptions } from "../utils";
import { PropTypes } from "prop-types";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({
  cartId,
  title,
  image,
  price,
  amount,
  company,
  productColor,
}) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem({ cartId }));
  };
  const handleAmountChange = (e) => {
    dispatch(editItem({ cartId, amount: parseInt(e.target.value) }));
  };
  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0 ">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg sm:w-32 sm:h-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="capitalize mt-2 text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ background: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmountChange}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={handleRemoveItem}
        >
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

CartItem.propTypes = {
  cartId: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  amount: PropTypes.number,
  company: PropTypes.string,
  productColor: PropTypes.string,
};
export default CartItem;
