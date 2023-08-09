import { useRef, useState } from "react";

import PaymentForm from "./PaymentForm";
import { validateOrderPaymentForm } from "@/utils/validationsYup";
import { notify } from "@/utils/notificationToastify";

const PaymentController = ({ submitOrder }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dataPayment = useRef({
    method: "",
    cardName: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dataPayment.current[name] = value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSubmitting) {
      setIsSubmitting(true);
      const res = await validateOrderPaymentForm(dataPayment.current);
      if (res === true) {
        submitOrder(dataPayment.current);
      } else {
        notify({}, "error", res);
      }
    }
  };

  return (
    <PaymentForm
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
};

export default PaymentController;
