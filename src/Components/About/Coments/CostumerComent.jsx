import CostumerDate from "/src/CostumerDate.json";
import { Avatar } from "@mui/material";
import './costumer.css'


const CostumerComment = () =>{

    return (
    

<div className="title-costumer-container">
<h1>Besucher empfehlen</h1>


<div className="comment-slider-block">

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

</div>    










</div>
    )

} 

export default CostumerComment;