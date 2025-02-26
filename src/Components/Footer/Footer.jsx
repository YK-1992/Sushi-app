import "./footerStyle.css";
import { Link } from "react-router-dom";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="contact-block">
          <h1>Contact</h1>
          <div className="contact-set">
            <h2>Location:</h2>
            <span> Daumm Str. 13599 Berlin </span>
          </div>
          <div className="contact-set">
            <h2>Number:</h2>
            <span>+49 800 008 88</span>
          </div>
          <div className="contact-set">
            <h2>Lieferung und Abholung:</h2>
            <span>
              Mo-So, 10:00 bis 23:00 Uhr Annahme von Bestellungen zur Lieferung
              und Abholung endet um 20:00 Uhr.
            </span>
          </div>
        </div>

        <div className="map-location-block">
          <APIProvider apiKey={"AIzaSyB69iAL0oAbSmsW-VELcsLWZ6PjTbGVA8A"}>
            <Map
              style={{ width: "100%", height: "60vh", zIndex: "-1" }}
              defaultCenter={{
                lat: 52.54175305285189,
                lng: 13.238990247221375,
              }}
              defaultZoom={14}
              gestureHandling={"cooperative"}
              disableDefaultUI={true}
            >
              <Marker
                position={{ lat: 52.54175305285189, lng: 13.238990247221375 }}
              />
            </Map>
          </APIProvider>
        </div>

        <div className="footer-block-bottom">
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

          <div className="footer-menu-block">
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-social-link">
            <a href="#">
              <AiOutlineWhatsApp size={23} />
            </a>
            <a href="#">
              <FaTelegram size={23} />
            </a>
            <a href="#">
              <FaInstagram size={23} />
            </a>
          </div>
          <div className="footer-number">
            <p>+49 800 88 888 00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
