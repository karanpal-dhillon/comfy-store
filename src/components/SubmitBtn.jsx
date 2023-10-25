import { PropTypes } from "prop-types";
import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      className="btn btn-primary btn-block"
      type="submit"
      disabled={isSubmitting}
    >
      {text}
    </button>
  );
};

SubmitBtn.propTypes = {
  text: PropTypes.string,
};

export default SubmitBtn;
