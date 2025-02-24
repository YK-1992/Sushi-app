import { Button } from "@mui/material";
import axios from "axios";

const CheckoutForm = () => {
  const handlePayment = async () => {
    try {
      const response = await axios.post("http://localhost:3000/payment");
      if (response.data.url) {
        window.location.href = response.data.url; // Перенаправление на страницу оплаты
      }
    } catch (error) {
      console.error("Ошибка платежа:", error);
    }
  };

  return <Button onClick={handlePayment}>Оплатить через Stripe</Button>;
};

export default CheckoutForm;
