import "./header.css";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton} from "@mui/material";
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useState } from "react";

import { Link} from "react-router-dom";
import { useSelector } from "react-redux";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
const Header = () => {

  const {items} = useSelector(state => state.card)
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    };

  return (

    <>
      <header className="container-header">
        <div className="logo-header">
          <div className="logo-header__icon">
            <span>K</span>
            <span>|</span>
            <span>Y</span>
          </div>
          <div className="logo-header__name">
            <span>Kyoto Cravings</span>
          </div>
        </div>

   

        <div className="nav-section"  >
          
          <IconButton className="burger-btn" aria-label="burger" sx={{ color: "white" }} onClick={toggleMenu}>
          <MenuIcon />
            </IconButton>  
          <div className={`nav-menu ${isOpen ? "active" : ""}`} >
            <Link to ="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/delivery">Lieferung</Link>
            <Link to="/contact">Contact</Link>
          </div>


      

          <Link to='/basket'>
          <IconButton aria-label="shop" sx={{ color: "white" }}>
              <ShoppingBagTwoToneIcon />
              <CartBadge badgeContent={items.length} color="primary" overlap="circular" />
            </IconButton>
          </Link>
      

            <IconButton aria-label="login two" sx={{ color: "white" }}>
              <LoginTwoToneIcon />
            </IconButton>
       
        </div>
      </header>

  
    </>

 
  );
};
export default Header;
