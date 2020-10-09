import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    let store = JSON.parse(localStorage.getItem("adotei@token"));
    if (store !== null) {
      history.push("/adocao");
    }
  }, [history]);

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
        localStorage.clear()
        localStorage.setItem("adotei@token", JSON.stringify(response.data));
        localStorage.setItem(
          "adotei@perfil",
          JSON.stringify(response.data.user)
        );
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
    <div className="row">
      <div className="login-container col s12 m4 offset-m4">
        <section className="form col s8 offset-s2">
          <form onSubmit={handleLogin}>
            <h1 id="adotei">Adotei</h1>

            <h3 id="bemvindo">Bem vindo!</h3>

            <h5 id="textologin">faça seu login:</h5>
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
            {!load ? (
              <button
                className={"button btn waves-effect waves-light"}
                type="submit"
              >
                Entrar
              </button>
            ) : (
              <div className="progress">
                <div className="indeterminate"></div>
              </div>
            )}

            <Link className="row" to="/registeruser">
              {/* <Link className="fa fa-facebook" to="/adocao"></Link>
            <Link className="fa fa-google" to="/adocao"></Link> */}
              <div className="col s12">
                <FiLogIn size={16} color="#3b5998" />
                <span id="cadastro">Cadastrar</span>
              </div>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}
//flex-direction: column;
//<button className="button" type='submit'>Entrar</button>
