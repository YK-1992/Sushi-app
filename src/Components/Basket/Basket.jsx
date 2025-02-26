import { Link } from "react-router-dom";
import "./basket.css";
import { orange } from "@mui/material/colors";

import { ThemeProvider, Button, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: orange,
  },
});
const Basket = () => {
  return (
    <section className="basket-stile">
      <div className="basketContainer">
        <img src="./shopping-bag.png" alt="" />
        <h1>Warenkorb</h1>
        <p>
          In Ihrem Warenkorb befinden sich keine Produkte. Befüllen Sie den
          Warenkorb mit einem unserer Angebote.
        </p>

        <Link to="/menu">
          <ThemeProvider theme={theme}>
            <Button variant="contained">Weiter einkaufen</Button>
          </ThemeProvider>
        </Link>
      </div>
    </section>
  );
};

export default Basket;
