import { PropTypes } from "prop-types";
const FormCheckbox = ({ label, name, size }) => {
  return (
    <div className="form-control items-center">
      <label className="cursor-pointer label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="checkbox"
        className={`checkbox checkbox-primary ${size}`}
        name={name}
      />
    </div>
  );
};

FormCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};
export default FormCheckbox;
