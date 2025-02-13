import "./adds.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material";
import { theme } from "../MenuBar/Umenu/unserMenu";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearItem, increaseQuantity, decreaseQuantity } from "../../redux/slises/cardSlice";
import Basket from "./Basket";

const BasketAdds = () => {
  const dispatch = useDispatch();
  const { items = [], totalPrice = 0 } = useSelector((state) => state.card) || {};

  return (
    <section className="wrapper__adds">
      <div className="adds__container">
        <div className="title__adds">
          <h1>Sie bestellen</h1>
          <Stack direction="row" spacing={1}>
            <Button
              onClick={() => dispatch(clearItem())}
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
            items.map((item, index) => (
              <div key={`${item.title}-${index}`} className="cart-item">
                <p>{item.title} - {item.price} €</p>
                <img src={item.img} alt={item.title} width={120} />
                <div className="quantity-control">
                  <Button onClick={() => dispatch(decreaseQuantity(item.title))} variant="outlined">-</Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => dispatch(increaseQuantity(item.title))} variant="outlined">+</Button>
                </div>
                <Button
                  onClick={() => dispatch(removeItem(item.title))}
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
