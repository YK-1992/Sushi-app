import './menubar.css';
import UnserMenu from './Umenu/unserMenu';




const MenuBar = () => {
    return(
        <section className='bar-section'>
            <div className="container-barMenu">
            <h1>Unser Menü</h1>
<UnserMenu/>


                </div>  
            
        </section>
    )
}

export default MenuBar;