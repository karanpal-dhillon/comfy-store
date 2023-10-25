import { PropTypes } from "prop-types";
const FormInput = ({ label, type, placeholder, name, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered"
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
};
export default FormInput;
