import React from 'react';
import "./styles.css"
import Cabecalho from '../Cabecalho';
import { FaHandHoldingHeart } from 'react-icons/fa';

export default function ProfileUser(){

  return(
    <div>
      <Cabecalho/>

      <h1 className="msgh1">Minha Conta</h1>
      <h2 className="msgh2h2">Ewerson Magias da Silva Lanche</h2>
      <h3>
        Saldo: <FaHandHoldingHeart /> 100
      </h3>
      <div className="profile-container">
        <button>Adicionar Petcoin</button>
      </div>

      <div className="doacoes-container">
        <h1>Minhas doações</h1>
      </div>
      <table className="table-container">
        <tr>
          <th>Instituição</th>
          <th>Data</th>
          <th>Petcoin</th>
          <th>Pet</th>
        </tr>
        <tr>
          <td>Auaufanato</td>
          <td>04/03/2020</td>
          <td>20</td>
          <td>Caramelin</td>
        </tr>
        <tr>
          <td>Auaufanato</td>
          <td>20/04/2020</td>
          <td>30</td>
          <td>Caramelin</td>
        </tr>
        <tr>
          <td>Auaufanato</td>
          <td>13/05/2020</td>
          <td>5</td>
          <td>Caramelin</td>
        </tr>
        <tr>
          <td>Auaufanato</td>
          <td>17/12/2020</td>
          <td>30</td>
          <td>Caramelin</td>
        </tr>
        <tr>
          <td>Auaufanato</td>
          <td>02/01/2019</td>
          <td>10</td>
          <td>Leona</td>
        </tr>
        <tr>
          <td>Auaufanato</td>
          <td>01/01/2019</td>
          <td>10</td>
          <td>Leona</td>
        </tr>
      </table>
    </div>
  );
}
