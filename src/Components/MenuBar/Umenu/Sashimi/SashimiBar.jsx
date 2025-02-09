import {Grid, Card, CardContent, Typography, Container, CardActions, CardMedia, Button, createTheme, ThemeProvider} from "@mui/material"
import Data from "/src/Data.json";
import './sashimi.css'
import {  lime, orange } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: lime,
    secondary: orange,
  },
});
const SashimiBar = ()=>{

  return(

<>
<Container maxWidth="lg">
<Grid container spacing={5} style={{marginTop: "20px"}}>

    {Data.map((result,index)=>(

        <Grid item xs={12} md={4} key={index}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="sashimi"
        height="140"
        image={result.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
   {result.date}
        </Typography>
      </CardContent>
      <CardActions className="cardStile">
       
       <ThemeProvider theme={theme}>
       <p>{result.price}</p>
       <Button variant="contained" color="secondary" size="large"  sx={{ ml: 4 }}>zum Warenkorb</Button>
       </ThemeProvider>
       
       
      </CardActions>
    </Card>
        </Grid>
    
    ))}
</Grid>

</Container> 


</>

    )
}

export default SashimiBar;