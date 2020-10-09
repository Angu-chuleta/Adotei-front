import React, { useEffect } from "react";
import logodotei from "../../assets/imagens/logodotei.png";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import SideMenu from "./sidemenu";

export default function Cabecalho() {
  const [nome, setNome] = React.useState("você!");
  const [role, setRole] = React.useState(1);
  const history = useHistory();

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("adotei@token"));
   if(saved === null ) { history.push("/") }else{
    setNome(saved.user.name);
    setRole(saved.role);
   } 
  }, [history]);

  function logout() {
    localStorage.removeItem("adotei@token");
    history.push("/");
  }
  return (
    <nav>
      
      <div className="nav-wrapper col s12">
        <div id="logomenu">
        <img id="logo" alt="logo" src={logodotei}></img>
        <SideMenu />
        </div>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {role === 2 ? (
            <li>
              <ul>
                <li>
                  <Link id="menuitem" to="/profileong">
                    Admin
                  </Link>
                </li>
              </ul>
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
            <Link id="menuitem" to="/" onClick={() => logout()}>
              sair
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
