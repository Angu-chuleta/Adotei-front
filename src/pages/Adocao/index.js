import React from 'react';
import './styles.css';
import Cabecalho from "../Cabecalho"
import { Link } from 'react-router-dom';
import  viralataCaramel1 from '../../assets/imagens/viralataCaramel1.jpg';
//import {FiArrowRight} from 'react-icons/fi'

export default function Adocao(){

 return(
    <div>
    <Cabecalho/>
        <div > 
        <Link to="/infoPet">

                <div className="adocao-container">
                <img src={viralataCaramel1} alt="Logo adotei"/>
                        <div className="topo-retangulo-container">
                                <h1>Caramelin</h1>
                                <h2>Raça não identificada</h2>
                                <h2>6 meses</h2>
                        </div>
                        <div className="abaixo-retangulo-container"></div>
                </div>
                
           </Link>
        </div>
    </div>    
 );

}