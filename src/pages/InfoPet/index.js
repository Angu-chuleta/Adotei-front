import React from "react";
import "./styles.css";
import Cabecalho from "../Cabecalho";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import viralataamarelo2 from "../../assets/imagens/viralataamarelo2.jpeg";
import viralataCaramel1 from "../../assets/imagens/viralataCaramel1.jpg";
import virlata3 from "../../assets/imagens/virlata3.jpg";

export default function InfoPet() {
  const textoInfo = `Lorem ipsum tempus ultricies inceptos vulputate faucibus massa, torquent fusce taciti praesent quisque augue varius aptent, felis scelerisque senectus sapien enim aenean. praesent consectetur condimentum nec nam integer nam cras justo pretium, venenatis malesuada nostra ut volutpat habitant eros aenean nostra, viverra posuere mollis conubia integer et eros felis. fringilla vulputate luctus facilisis sociosqu integer phasellus quam nam euismod tellus velit quisque, primis ut elit eget aliquet lacinia potenti inceptos facilisis ullamcorper. accumsan molestie nisl viverra lectus nostra at pharetra malesuada tincidunt hendrerit gravida, erat himenaeos primis dolor semper rhoncus purus velit className cubilia sem, non rhoncus tristique sem eu cubilia vehicula velit lectus elit.
    Para adotalo entre em c ontato com o numero: 123456 `;
  return (
    <div>
      <Cabecalho />
      <div>

      <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
    <img src={viralataCaramel1} alt="Logo adotei"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
      </div>
      
    </div>
  );
  //VAMOS COLOCAR UM PADRO DESSA DESCRIÇÂO PELO HTML <img src={viralataCaramel1} alt="Logo adotei"/>
}
