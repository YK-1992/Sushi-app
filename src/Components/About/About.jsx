
import './aboutStyle.css'
import CostumerComment from './Coments/CostumerComent';
import Data from "/src/Data.json";

const About = () => {
    return(
        <section>
            <div className="container-about">
            <h1>Unsere Vorteile</h1> 
            <div className="about-blocks">
                <ul>
                    {
                        Data.map((item, index) =>(
                            <li key={index}>
                            <img src={item.img} style={{backgroundColor:item.color}}  alt="" />
                            <h2>{item.title}</h2>
                            <span>{item.date}</span>
                        </li>
                        ))
                    }
                   
                </ul>
                </div>  
<div className="about-inform-block">
    <h2>Über die Lieferung</h2>
    <div className="about-date-container">
     <div className='about-date'>
        <h3>GÜNSTIGE SELBSTABHOLUNG - 10% RABATT </h3>
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolores, placeat tenetur quo totam numquam nobis in ea dicta.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolores, placeat tenetur quo totam numquam nobis in ea dicta.</p>
        </div>
    <div className='about-date'>
        <h3>GÜNSTIGE SELBSTABHOLUNG - 10% RABATT </h3>
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h5>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolores, placeat tenetur quo totam numquam nobis in ea dicta.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolores, placeat tenetur quo totam numquam nobis in ea dicta.</p>
        </div>    
    </div>
   
    
</div>
<div className="costumer-block">
    <CostumerComment/>
</div>
            </div>
        </section>
    )
}

export default About;