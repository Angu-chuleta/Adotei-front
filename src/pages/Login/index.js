import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
//import logodotei from '../../assets/imagens/logodotei.png'; <img src={logodotei} alt="Logo adotei" />
// para mudar o backgrou vai no global
import apiSevice from "../../services/api";
import { FiLogIn } from "react-icons/fi";

export default function Login() {
  const history = useHistory();
  const [username, setLogin] = useState("");
  const [password, setSenha] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await apiSevice.api.post("/auth/login", { username, password });
      localStorage.setItem("adotei@token", JSON.stringify({ username, token: response.data.token }));
      apiSevice.token = response.data.token;
      console.log(apiSevice.token);
      history.push("/adocao");
    } catch (err) {
        console.log(err);
        
        alert("Erro ao logar: verifique seu login e senha!", err);
    
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Login Adotei</h1>
          <input
            placeholder="Login"
            value={username}
            onChange={(e) => setLogin(e.target.value)}
          ></input>
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className=".back-link" to="/registeruser">
            <Link className="fa fa-facebook" to="/adocao"></Link>
            <Link className="fa fa-google" to="/adocao"></Link>
            <FiLogIn size={16} color="black" /> Cadastrar
          </Link>
        </form>
      </section>
    </div>
  );
}
//flex-direction: column;
//<button className="button" type='submit'>Entrar</button>
