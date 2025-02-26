/* eslint-disable react-hooks/rules-of-hooks */
import "./animateStyle.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import DataE from "../../../DataE.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const UMenu = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  
  if (!DataE || DataE.length === 0) return null;

  const totalSlides = DataE.length;

  // Автоматическое переключение каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="section__uMenu">
      <div className="uMenu__container">
        <div className="uMenu__animate">
          {DataE[slideIndex].cards.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              className="motion-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              <Card sx={{ width: 340, height: 230, borderRadius: 10 }}>
                <CardActionArea>
                  <CardMedia
                    className="slide"
                    component="img"
                    height="300"
                    image={item.img}
                    alt="card image"
                  />
                </CardActionArea>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UMenu;
