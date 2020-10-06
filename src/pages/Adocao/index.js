import React, { useState, useEffect } from 'react';
import './styles.css';
import Cabecalho from '../Cabecalho';

import apiService from '../../services/api';
import { Link } from 'react-router-dom';
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
        <div className="col s3"></div>
        <div className="col  s6">
          {pets.map((pet) => (
            <div key={pet.id} id="card" className="">
              <div className="card">
                <div className="card-image">
                  <img src={pet.foto} alt={pet.name}></img>

                  <span className="card-title">{pet.name}</span>
                </div>

                <div className="card-content">
                  <p id="sobre">{pet.sobre}</p>
                </div>
                <div className="card-action">
                  <Link to="/infopet">Sobre</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
