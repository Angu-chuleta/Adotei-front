import React from 'react';
import './styles.css';
import Cabecalho from '../Cabecalho';
import { Link } from 'react-router-dom';
import viralataCaramel1 from '../../assets/imagens/viralataCaramel1.jpg';

//npm install @material-ui/core --save

export default function BuscaPet() {
  const nome = 'Caramelin';
  const raca = 'Raça não identificada';
  const idade = '6 meses';
  const cidade = 'Vitória';

  return (
    <div>
      <Cabecalho />
      <div className="busca-pet-container">
        <h1>Animais de {cidade}</h1>
        <ul>
          <li>
            <img src={viralataCaramel1} alt="Logo adotei" />
            <div className="busca-pet-topo-retangulo-container">
              <h1>{nome}</h1>
              <h2>{raca}</h2>
              <h2>{idade}</h2>
            </div>
            <div className="busca-pet-baixo-retangulo-container"></div>
          </li>

          <li>
            <img src={viralataCaramel1} alt="Logo adotei" />
            <div className="busca-pet-topo-retangulo-container">
              <h1>{nome}</h1>
              <h2>{raca}</h2>
              <h2>{idade}</h2>
            </div>
            <div className="busca-pet-baixo-retangulo-container"></div>
          </li>

          <li>
            <img src={viralataCaramel1} alt="Logo adotei" />
            <div className="busca-pet-topo-retangulo-container">
              <h1>{nome}</h1>
              <h2>{raca}</h2>
              <h2>{idade}</h2>
            </div>
            <div className="busca-pet-baixo-retangulo-container"></div>
          </li>

          <li>
            <img src={viralataCaramel1} alt="Logo adotei" />
            <div className="busca-pet-topo-retangulo-container">
              <h1>{nome}</h1>
              <h2>{raca}</h2>
              <h2>{idade}</h2>
            </div>
            <div className="busca-pet-baixo-retangulo-container"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
