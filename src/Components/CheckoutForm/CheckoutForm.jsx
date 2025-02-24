// import axios from "axios";

// const CheckoutForm = () => {
//   const handlePayment = async () => {
//     try {
//       const response = await axios.post("http://localhost:3000/payment");
//       if (response.data.url) {
//         window.location.href = response.data.url; // Перенаправление на страницу оплаты
//       }
//     } catch (error) {
//       console.error("Ошибка платежа:", error);
//     }
//   };

//   return <div onClick={handlePayment}>Payment</div>;
// };

// export default CheckoutForm;

import axios from "axios";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../../redux/slises/cardSlice"; // Импортируем clearItem

const CheckoutForm = () => {
  const totalAmount = useSelector((state) => state.card.totalPrice);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    if (totalAmount <= 0) {
      alert("Your shopping cart is empty!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/payment", {
        amount: Math.round(totalAmount * 100), // Передаём в центах
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        alert("Payment was successful!");
        dispatch(clearItem()); // Очищаем корзину
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Error creating payment!");
    }
  };

  return (
    <Button variant="contained" onClick={handlePayment}>
      Payment
    </Button>
  );
};

export default CheckoutForm;
