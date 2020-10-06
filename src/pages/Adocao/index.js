import React, { useState, useEffect } from 'react';
import './styles.css';
import Cabecalho from '../Cabecalho';
import apiService from '../../services/api';
//import {FiArrowRight} from 'react-icons/fi'

export default function Adocao() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    apiService.get('pet').then((response) => {
      setPets(response.data);
    });
  }, []);

  return (
    <div>
      <Cabecalho />
      <div className="row">
        <div className="col s3"/>
        <div className="col  s6">
        {pets.map((pet) => (
              <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={pet.foto} alt={pet.name}></img>
              </div>
              <div className="card-content">
                <span className="card-title activator orange-text text-darken-2">{pet.name}</span>
                Carinho
              </div>
              <div className="card-reveal">
                <span className="card-title orange-text text-darken-2">{pet.name}<i className="material-icons right">close</i></span>
          <p>{pet.sobre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
