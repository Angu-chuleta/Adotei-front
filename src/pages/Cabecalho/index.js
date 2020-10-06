import React, { useEffect } from 'react';
import logodotei from '../../assets/imagens/logodotei.png';
import { Link } from 'react-router-dom';
import './styles.css';

//npm install @material-ui/core --save

export default function Cabecalho() {
  const [nome, setNome] = React.useState('você!');

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem('adotei@token'));
    setNome(saved.username);
  });

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          <img id="logo" src={logodotei}></img>
        </a>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link id="menuitem" to="/adocao">
              Inicio
            </Link>
          </li>
          <li>
            <Link id="menuitem" to="/profileuser">
              Perfil do {nome}
            </Link>
          </li>
          <li>
            <Link id="menuitem" to="/">
              sair
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
