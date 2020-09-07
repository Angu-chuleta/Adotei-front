import React from 'react';
import './styles.css';
import Cabecalho from "../Cabecalho"
import { Link } from 'react-router-dom';
import  viralataCaramel1 from '../../assets/imagens/viralataCaramel1.jpg';
//import {FiArrowRight} from 'react-icons/fi'

export default function Adocao(){
        const nome = "Caramelin";
        const raca = "Raça não identificada";
        const idade = "6 meses";
 return(
    <div>
    <Cabecalho/>
        <div > 
        <Link to="/infoPet">

                <div className="adocao-container">
                <img src={viralataCaramel1} alt="Logo adotei"/>
                        <div className="topo-retangulo-container">
                               <p> <h1>{nome}</h1></p>
                                <h2>{raca}</h2>
                                <h2>{idade}</h2>
                        </div>
                        <div className="abaixo-retangulo-container"></div>
                </div>
                
           </Link>
        </div>
    </div>    
 );

}