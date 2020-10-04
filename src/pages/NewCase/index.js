import React, { useState } from "react";
import "./styles.css";
import Cabecalho from "../Cabecalho";
import api from "../../services/api";

export default function NewCase() {
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [idade, setIdade] = useState("");
  const [sobre, setSobre] = useState("");
  const [porte, setPorte] = useState("");
  const foiAdotado = false;
  async function handleRegister2(e) {
    e.preventDefault();

    const data = {
      name,
      foto,
      porte,
      sobre,
      idade,
      foiAdotado,
    };

    try {
      const response = await api.post("pet", data);
      alert(`Cadastro realizado com sucesso${response}`);
    } catch (err) {
      alert("Erro no cadastro tente novamente", err);
    }
  }

  return (
    <div>
      <Cabecalho />
      <div className="newCase-container">
        <div className="content">
          <section>
            <h1>Nova Adoção</h1>
          </section>
          <form onSubmit={handleRegister2}>
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Porte"
              value={porte}
              onChange={(e) => setPorte(e.target.value)}
            />
            <input
              placeholder="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />

           
            <textarea
              placeholder="Descrição:"
              value={sobre}
              onChange={(e) => setSobre(e.target.value)}
            />
            <input
              type="file"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
