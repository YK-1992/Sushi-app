import "./adds.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { theme } from "../MenuBar/Umenu/unserMenu";
import { ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearItem } from "../../redux/slises/cardSlice"; // Путь к слайсу
import Basket from "./Basket";

const BasketAdds = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.card); // Получаем товары и общую цену из Redux

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // Передаем ID товара для удаления
  };

  const handleClearCart = () => {
    dispatch(clearItem()); // Очищаем корзину
  };

  return (
    <section className="wrapper__adds">
      <div className="adds__container">
        <div className="title__adds">
          <h1>Sie bestellen</h1>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={handleClearCart}
              color="inherit"
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Stack>
        </div>

        <div className="adds_block">
          {items.length === 0 ? (
            <Basket />
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.title}</p>
                <img src={item.img} alt={item.title} width={120} />
                <Button
                  onClick={() => handleRemoveItem(item.id)} 
                  color="inherit"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </div>

        <div className="pays__adds">
          <p>
            Prise bestellen: <span>{totalPrice.toFixed(2)} €</span>
          </p>

          <ThemeProvider theme={theme}>
            <Button variant="contained">Einkaufen</Button>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};

export default BasketAdds;
