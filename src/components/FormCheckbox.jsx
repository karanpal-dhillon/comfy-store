import { PropTypes } from "prop-types";
const FormCheckbox = ({ label, name, size, defaultValue }) => {
  return (
    <div className="form-control items-center">
      <label className="cursor-pointer label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="checkbox"
        className={`checkbox checkbox-primary ${size}`}
        defaultChecked={defaultValue}
        name={name}
      />
    </div>
  );
};

FormCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  defaultValue: PropTypes.string,
};
export default FormCheckbox;
