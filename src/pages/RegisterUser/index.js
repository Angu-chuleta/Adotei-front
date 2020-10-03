import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";

export default function RegisterUser() {
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [email, setEmail] = useState("");
  const [sobre, setSobre] = useState("");
  const [credito, setCreditos] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [state, setState] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      foto,
      email,
      telefone,
      sobre,
      credito,
      senha,
      endereco,
      cidade,
      uf,
      bairro,
    };

    try {
      const response = await api.post("user", data);
      alert("Cadastro realizado com sucesso");
    } catch (err) {
      alert("Erro no cadastro tente novamente");
    }
  }

  return (
    <div className="registerUser-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça cadastro no Adotei e ajude os bichinhos </p>
          <Link className=".back-link" to="/">
            <FiArrowLeft size={16} color="black" /> Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Foto"
            type="file"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            placeholder="Descrição"
            type="text"
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
          />
          <input
            placeholder="Conta para doação"
            value={credito}
            onChange={(e) => setCreditos(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <input
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ whidth: 80 }}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              placeholder="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <input
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
