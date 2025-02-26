import { motion } from "framer-motion";
import "./stileMain.css";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="main-text">
          <p>Willkommen in der Sushi-Bar</p>
          <motion.h1
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, x: -100, scale: 0.1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 3 }}
          >
            Kyoto Cravings
          </motion.h1>
          <p>Die beste Bar mit der Seele und der Kultur Japans</p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
