
import { useEffect, useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  ThemeProvider,
  Button,
  createTheme,
} from "@mui/material";
import { lime, orange } from "@mui/material/colors";
import "../MenuBar/Umenu/Umenu.css";
import {useDispatch} from 'react-redux';
import axios from 'axios'
import { addItem } from '..//../redux/slises/cardSlice';
const theme = createTheme({
  palette: {
    primary: lime,
    secondary: orange,
  },
});


const MenuContent = ()=> {
  const dispatch = useDispatch(); 
  const [selectedTab, setSelectedTab] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleAddToCart = (item) => {
    dispatch(addItem(item));  // Добавляем товар в корзину
  };
 //server Back simulation
 useEffect(() => {
  axios.get(`https://67963810bedc5d43a6c4994f.mockapi.io/shushiStore`)
  .then((res) =>  {
    setItems(res.data);
    setLoading(false);
       });
}, []);


if (loading) {
  return <p>Loading...</p>;
}
  return (
    <Box sx={{ display: "flex", justifyContent: "center" , paddingTop: 7, background: "rgb(234 116 116 / 2%)" }}>
      <div className="container-UMenu">
        <Tabs
          value={selectedTab}
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: "#FFA667",
              color: "#FFA667",
            },
          }}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {items.map((item) => {
            return (
              <Tab
                sx={{
                  color: "rgba(0, 0, 0, 0.6)",
                  "&.Mui-selected": {
                    color: "darkorange",
              
                  },
                }}
                key={item.id}
                icon={
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: 65,
                      height: 65,
                      boxShadow: "2px 2px 3px grey",
                      borderRadius: 10,
                      background: "white",
                      padding: "1rem",
                    }}
                  ></img>
                }
                label={item.name}
              ></Tab>
            );
          })}
        </Tabs>

        <Container sx={{ paddingTop: 7, paddingBottom: 6 }} className="card-position">
        
            {items[selectedTab].cards.map((result, index) => (
              <Card
                sx={{
                  maxWidth: 280,
                  minHeighth: 320,
                  borderRadius: 3,
                  boxShadow: "1px 0px 4px grey",
                }}
                key={index}
             >
                <CardMedia
                  sx={{ height: 180, margin: "0 auto" }}
                  component="img"
                  alt="sashimi"
                  image={result.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {result.date}
                  </Typography>
                </CardContent>
                <CardActions
                  className="cardStile"
                  sx={{
                    display: "flex",

                    justifyContent: "space-around",
                  }}
                >
                  <ThemeProvider theme={theme} sx={{ paddingTop: "1rem" }}>
                    <p>{result.price}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{ ml: 3 }} onClick={() => handleAddToCart(result)}
                    >
                      Warenkorb
                    </Button>
                  </ThemeProvider>
                </CardActions>
              </Card>
            ))}
        
        </Container>
      </div>
    </Box>
  );
}

export default MenuContent;