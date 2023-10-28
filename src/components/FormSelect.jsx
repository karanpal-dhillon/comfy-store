import { PropTypes } from "prop-types";
const FormSelect = ({ label, name, size, list = [], defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor="name" className="label capitalize">
        <span className="label-text">{label}</span>
      </label>
      <select
        name={name}
        className={`select select-bordered w-full max-w-xs ${size}`}
        value={defaultValue}
      >
        {list.map((l) => (
          <option value={l} key={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
};

FormSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  list: PropTypes.array,
  defaultValue: PropTypes.string,
};
export default FormSelect;
