import './style.css'
import {motion} from "framer-motion"
const Costumers = () =>{
    return(
        <section className='section__costumer'>
<div className="container__costumer">
    <div className="inform__costumer">
        <motion.div
    
          initial={{opacity: 0, x: -100, scale: 0.8}}
          whileInView={{opacity: 1, x: 0, scale: 1}}
          transition={{duration: 3, }}
          viewport={{ once: true, amount: 0.5 }}
        
        
        className="img__container">
            <img src="./pict1.jpg" alt="" />
        </motion.div>
        <motion.div
      
         initial={{opacity: 0, x: 100, scale: 0.8}}
         whileInView={{opacity: 1, x: 0, scale: 1}}
         transition={{duration: 3, }}
         viewport={{ once: true, amount: 0.2 }}
        
        className="text__container">
            <h1>Lorem in</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae quasi odio aperiam soluta harum repellendus omnis,
                 voluptatem placeat eveniet molestias?</p>
        </motion.div>
    </div>
    <div className="inform__costumer costumer-st">
      
        <motion.div
         initial={{opacity: 0, x: -400, scale: 0.8}}
         whileInView={{opacity: 1, x: 0, scale: 1}}
         transition={{duration: 3, }}
         viewport={{ once: true, amount: 0.2 }}
        
        
        className="text__container">
            <h1>Lorem in</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae quasi odio aperiam soluta harum repellendus omnis,
                 voluptatem placeat eveniet molestias?</p>
        </motion.div>
        <motion.div 
         initial={{opacity: 0, y: 100, scale: 0.8}}
         whileInView={{opacity: 1, y: 0, scale: 1}}
         transition={{duration: 3}}
         viewport={{ once: true, amount: 0.2 }}
        
        
        className="img__container">
            <img src="./pict2.jpg" alt="" />
        </motion.div>
    </div>
</div>
        </section>
    )
}

export default Costumers;