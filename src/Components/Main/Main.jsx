import Header from '../Header/Header';
import { motion } from "motion/react"
import './stileMain.css'

const MainSection = ()=> {
    return(
        <section className="main-section">
          
            <Header/>  
            <div className="container">

                <div className="main-text">

                <p>Willkommen in der Sushi-Bar</p>
                <motion.h1 
                 initial={{ x: -500, opacity: 0}}
                 animate={{ x: 0, opacity: 1}}
                 transition={{
                     duration: 3.5,
    
                    staggerChildren: 0.1
                 }}
                
                >Kyoto Cravings</ motion.h1> 
                <p>Die beste Bar mit der Seele und der Kultur Japans</p>
                </div>
               
            </div>
       
        </section>
    )
}

export default MainSection;