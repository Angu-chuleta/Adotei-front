import React, { useEffect } from "react";
import logodotei from "../../assets/imagens/logodotei.png";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

//npm install @material-ui/core --save

export default function Cabecalho() {
  const [nome, setNome] = React.useState("você!");
  const [role, setRole] = React.useState(1);
  const history = useHistory();

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("adotei@token"));
    saved === null ? history.push("/") : setNome(saved.user.name);
    console.log(saved);
    //setRole(saved.user.role);
  }, []);

  function logout() {
    localStorage.removeItem("adotei@token");
    history.push("/");
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <img id="logo" alt="logo" src={logodotei}></img>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {role == 2 ? (
            <li>
              <Link id="menuitem" to="/profileuser">
                Perfil do {nome}
              </Link>
            </li>
          ) : (
            <div></div>
          )}

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
            <Link id="menuitem" onClick={() => logout()}>
              sair
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
