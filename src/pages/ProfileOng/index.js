import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import "./styles.css";
import Cabecalho from "../Cabecalho";
import apiService from "../../services/api";

//Incluir instituição no cadastro Pet
export default function ProfileOng() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    apiService.get("pet").then((response) => {
      setPets(response.data);
    });
  }, []);

  async function hundleDeleteCase(pet) {
    try {
      await apiService.delete(`pet/${pet._id}`);
      setPets(pets.filter((pets) => pets._id !== pet._id));
    } catch (err) {
      alert(`Erro ao deletar: ${err}`);
    }
  }

  return (
    <div>
      <Cabecalho />
      <div className="profileUser-container">
        <header>
          <span>Bem vindo, Usuário</span>

          <Link className="button btn waves-effect waves-light " to="/new">
            Cadastrar novo caso
          </Link>
        </header>

        <h1>Casos {pets.length} cadastrados</h1>
        <ul className="box">
          {pets.map((pet) => (
            <li key={pet._id}>
              <div className="card z-depth-2">
                <div className="z-depth-2 card-image waves-effect waves-block waves-light">
                  <div
                    onClick={() => hundleDeleteCase(pet)}
                    className="btnlixo col s1 offset-s10"
                  >
                    <FiTrash2 size={32} color="#f2a365" />
                  </div>

                  <img
                    className="fotos activator"
                    src={pet.foto}
                    alt={pet.name}
                  ></img>
                </div>
                <div className="card-content">
                  <span className="card-title activator orange-text text-darken-2">
                    {pet.name}
                  </span>
                  Carinho
                </div>
                <div className="card-reveal">
                  <span className="card-title orange-text text-darken-2">
                    {pet.name}
                    <i className="material-icons right">close</i>
                  </span>
                  <p>{pet.sobre}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
/*
<li>
onClick={hundleDeleteCase(pet._id)}
<strong>Caso</strong>
<p>caso Teste</p>
<strong>Descricao</strong>
<p>Descricao Teste</p>
<strong>Contato</strong>
<p>(27)4091-9240</p>
<button type="button">
    <FiTrash2 size={20} color="#a8a8b3"/>
</button>
</li>*/
