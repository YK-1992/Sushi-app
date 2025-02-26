import "./menubar.css";
import Costumers from "./Umenu/Costumers/Costumers";
import UMenu from "./Umenu/unserMenu";

const MenuBar = () => {
  return (
    <section className="bar-section">
      <div className="container-barMenu">
        <div className="box__color"></div>
        <UMenu />
        <Costumers />
      </div>
    </section>
  );
};

export default MenuBar;
