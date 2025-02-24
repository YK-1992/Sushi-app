import "./header.css";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import {IconButton, Badge} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";


const CartBadge = styled(Badge)`
  & .MuiBadge-badge {
    top: -12px;
    right: -6px;
  }
`;

const Header = () => {
  const { items } = useSelector((state) => state.card);
  const [isOpen, setIsOpen] = useState(false);
  const navSectRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const CloseMenu = () => {
    setIsOpen(false)
  }

  useEffect (() => {
    const handClickOutside = (e) =>{
      if (navSectRef.current && !navSectRef.current.contains(e.target)){
        CloseMenu();
      }
    };
    document.addEventListener('mousedown', handClickOutside);
    return ()=>{
      document.removeEventListener('mousedown', handClickOutside);
    };
  }, []);

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

        <div className="nav-section" ref={navSectRef}>
          <IconButton
            className="burger-btn"
            aria-label="burger"
            sx={{ color: "white" }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <div className={`nav-menu ${isOpen ? "active" : ""}`}>
            <Link to="/home" onClick={CloseMenu}>Home</Link>
            <Link to="/menu" onClick={CloseMenu}>Menu </Link>
            <Link to="/about" onClick={CloseMenu}>About</Link>
            <Link to="/contact" onClick={CloseMenu}>Contact</Link>
          </div>

          <Link to="/basket">
            <IconButton  aria-label="shop" 
            sx={{color: "white",
      transition: "color 0.3s ease",
      "&:hover": { color: "rgb(255, 98, 0))" },
      "&:active": { color: "rgb(255, 98, 0)" }}}>
              <ShoppingBagTwoToneIcon />
              <CartBadge
                badgeContent={items.length}
                color="primary"
                overlap="circular"
              />
            </IconButton>
          </Link>

      
        </div>
      </header>
    </>
  );
};

export default Header;
