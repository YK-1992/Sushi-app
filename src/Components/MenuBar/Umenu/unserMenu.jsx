import { useState } from "react";

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
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Umenu.css";

export const theme = createTheme({
  palette: {
    primary: orange,
    secondary: orange,
  },
});

const UnserMenu = () => {

 


  const [selectedTab, setSelectedTab] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  //server Back simulation
  // useEffect(() => {
  //   fetch("https://67963810bedc5d43a6c4994f.mockapi.io/shushiStore")
  //     .then((res) => res.json())
  //     .then((arr) => {
  //       setItem(arr);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  axios.get(`https://67963810bedc5d43a6c4994f.mockapi.io/shushiStore`)
  .then((res) =>  {
    setItems(res.data);
    setLoading(false);
       });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "80px",
    responsive: [
      //responsive with mobile 768!!!
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
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

        <Container style={{ paddingTop: 6, paddingBottom: 6 }}>
          <Slider {...settings}>
            {items[selectedTab].cards.map((result, index) => (
              <Card
                sx={{
                  maxWidth: 320,
                  minHeighth: 320,
                  borderRadius: 3,
                  boxShadow: "1px 0px 4px grey",
                }}
                key={index}
              >
                <CardMedia 
                  style={{ height: 180, margin: "0 auto" }}
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

                >
                  {/* <ThemeProvider theme={theme}>
                    <p>{result.price}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      
                    >
                      Warenkorb
                    </Button>
                  </ThemeProvider> */}
                </CardActions>
              </Card>
            ))}
          </Slider>
        </Container>
      </div>
    </Box>
  );
};

export default UnserMenu;
