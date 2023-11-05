import { PropTypes } from "prop-types";
const FormInput = ({ label, type, placeholder, name, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className="label" htmlFor={name}>
        <span className="label-text"> {label}</span>
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-bordered ${size}`}
        defaultValue={defaultValue}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  size: PropTypes.string,
};
export default FormInput;
