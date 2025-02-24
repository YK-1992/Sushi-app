import CostumerDate from "/src/CostumerDate.json";
import { Avatar } from "@mui/material";
import './costumer.css'
import {motion} from "motion/react"

const CostumerComment = () =>{

    return (
    

<div className="title-costumer-container">
<h1>Besucher empfehlen</h1>


<motion.div
   initial={{ opacity: 0, scale: 0 }}
   whileInView={{ opacity: 1, scale: 1 }}
   viewport={{ once: true, amount: 0.5 }}
   transition={{
       duration: 1,
       scale: { type: "spring", visualDuration: 3, bounce: 0.3 }
      
   }}
className="comment-slider-block">

{CostumerDate.map((item, index) =>( 
    <div className="slider-components"key={index}>
        <img src={item.img} style={{width: 19}} alt="img"/>
            <p>{item.comt}</p>
            <div className="avatarMenu">
<Avatar src={item.avatar}/>
<div className="info">
<span>{item.name}</span>
<span>{item.mail}</span>     
    </div> 

         </div>
    </div>
))

}

</motion.div>    










</div>
    )

} 

export default CostumerComment;