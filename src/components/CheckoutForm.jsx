import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

const CheckoutForm = () => {
  return (
    <Form>
      <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
      <FormInput
        label="First Name"
        type="text"
        placeholder="Enter first name"
        name="firstName"
      />
      <FormInput
        label="Address"
        type="text"
        placeholder="Address"
        name="address"
      />
      <div className="mt-10">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
