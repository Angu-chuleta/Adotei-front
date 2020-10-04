import React from 'react';
import './styles.css';
import Cabecalho from "../Cabecalho" 
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import viralataamarelo2 from '../../assets/imagens/viralataamarelo2.jpeg';
import  viralataCaramel1 from '../../assets/imagens/viralataCaramel1.jpg';
import virlata3 from "../../assets/imagens/virlata3.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';


export default function InfoPet(){
    const textoInfo = `Lorem ipsum tempus ultricies inceptos vulputate faucibus massa, torquent fusce taciti praesent quisque augue varius aptent, felis scelerisque senectus sapien enim aenean. praesent consectetur condimentum nec nam integer nam cras justo pretium, venenatis malesuada nostra ut volutpat habitant eros aenean nostra, viverra posuere mollis conubia integer et eros felis. fringilla vulputate luctus facilisis sociosqu integer phasellus quam nam euismod tellus velit quisque, primis ut elit eget aliquet lacinia potenti inceptos facilisis ullamcorper. accumsan molestie nisl viverra lectus nostra at pharetra malesuada tincidunt hendrerit gravida, erat himenaeos primis dolor semper rhoncus purus velit class cubilia sem, non rhoncus tristique sem eu cubilia vehicula velit lectus elit.
    Para adotalo entre em contato com o numero: 123456 `
 return(
    <div>
    <Cabecalho/>
        <div>
            <AliceCarousel autoPlay autoPlayInterval="3500">
                <img src={viralataCaramel1} alt="Logo adotei"/>
                <img src={viralataamarelo2} alt="Logo adotei"/>
                <img src={virlata3} alt="Logo adotei"/>
            </AliceCarousel>
            <div className="info-container">
                
                <p>{textoInfo}</p>
            </div>
        </div>
    </div>    
 );
//VAMOS COLOCAR UM PADRO DESSA DESCRIÇÂO PELO HTML
}