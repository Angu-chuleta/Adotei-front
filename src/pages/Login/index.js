import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import apiSevice from "../../services/api";
import { FiLogIn } from "react-icons/fi";

export default function Login() {
  const history = useHistory();
  const [username, setLogin] = useState("");
  const [password, setSenha] = useState("");
  const [load, setload] = useState("");
  const [FildErro, setFildErro] = useState(false);
  async function handleLogin(e) {
    e.preventDefault();
    setFildErro(false);
    if (username !== "" && password !== "") {
      setload("disabled");

      try {
        const response = await apiSevice.post("/auth/login", {
          username,
          password,
        });
        localStorage.setItem("adotei@token", JSON.stringify(response.data));
        localStorage.setItem(
          "adotei@perfil",
          JSON.stringify(response.data.user)
        );
        apiSevice.token = response.data.token;
        history.push("/adocao");
      } catch (err) {
        console.log(err);

        alert("Erro ao logar: verifique seu login e senha!", err);
      }
    } else {
      setFildErro(true);
    }

    setload("");
  }

  return (
    <div className="login-container col s12">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Login Adotei</h1>
          <input
            placeholder="Login"
            value={username}
            onChange={(e) => setLogin(e.target.value)}
          ></input>
          {FildErro ? <span id="erro">campo obrigatório</span> : null}

          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          {FildErro ? <span id="erro">campo obrigatório</span> : null}
          <button
            className={load + "button btn waves-effect waves-light"}
            type="submit"
          >
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
