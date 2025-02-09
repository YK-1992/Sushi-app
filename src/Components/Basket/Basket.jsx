import { theme } from '../MenuBar/Umenu/unserMenu';
import { Link } from 'react-router-dom';
import './basket.css'
import {

   
    ThemeProvider,
    Button,
  
  } from "@mui/material";


const Basket = () => {
    return (
        <section className='basket-stile'>
<div className="basketContainer">

        <img src="./purchase.png" alt="" />
        <h1>Warenkorb</h1>
        <p>In Ihrem Warenkorb befinden sich keine Produkte. 
        Befüllen Sie den Warenkorb mit einem unserer Angebote.</p>

       <Link to='/menu'>
       <ThemeProvider theme={theme}>
       <Button variant="contained">
        Weiter einkaufen
    </Button>
       </ThemeProvider>
       </Link>
     
      
                 
           
             
</div>
        
        </section>
    )
}

export default Basket;