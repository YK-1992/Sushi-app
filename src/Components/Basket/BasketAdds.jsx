
import "./adds.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { IconButton, createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";

import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  clearItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slises/cardSlice";
import Basket from "./Basket";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
const BasketAdds = () => {
  const dispatch = useDispatch();
  const { items = [], totalPrice = 0 } =
    useSelector((state) => state.card) || {};
  const theme = createTheme({
    palette: {
      primary: orange,
      secondary: orange,
    },
  });

  return (
    <section className="wrapper__adds">
      <div className="adds__container">
        <div className="title__adds">
          <h1>Deine ausgewählten Produkte</h1>
          <span></span>

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
          <span className="border_bottom"></span>
          {items.length === 0 ? (
            <Basket />
          ) : (
            items.map((item, index) => (
              <div key={`${item.title}-${index}`} className="cart-item">
                <img src={item.img} alt={item.title} width={190} height={120} />

                <p>
                  {item.title} - {item.price}{" "}
                </p>
                <div className="quantity-control">
                  <IconButton
                    aria-label="delete"
                    onClick={() => dispatch(decreaseQuantity(item.title))}
                    color="inherit"
                    variant="outlined"
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  <span>{item.quantity}</span>

                  <IconButton
                    aria-label="delete"
                    onClick={() => dispatch(increaseQuantity(item.title))}
                    color="inherit"
                    variant="outlined"
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </div>
                <IconButton
                  aria-label="delete"
                  onClick={() => dispatch(removeItem(item.title))}
                  color="inherit"
                  variant="outlined"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ))
          )}
          <span className="border_bottom"></span>
        </div>
        <div className="pays__adds">
          <p>
            Prise bestellen: <span>{totalPrice.toFixed(2)} €</span>
          </p>

          <ThemeProvider theme={theme}>
            <CheckoutForm />
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};

export default BasketAdds;
