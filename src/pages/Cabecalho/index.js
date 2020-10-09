import React, { useEffect } from "react";
import logodotei from "../../assets/imagens/logodotei.png";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import SideMenu from "./sidemenu";

export default function Cabecalho() {
  const [nome, setNome] = React.useState("você!");
  const [role, setRole] = React.useState(1);
  const [width, setwidth] = React.useState(window.innerWidth);

  const history = useHistory();

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("adotei@token"));
   if(saved === null ) { history.push("/") }else{
    setNome(saved.user.name);
    setRole(saved.role);
   } 
   const updateWidth =  ()=>  {
    setwidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWidth);
  return () => window.removeEventListener("resize", updateWidth);
  }, [history,width]);

  const logout = () => {
    localStorage.clear()
    history.push("/");
  }
  return ( width >= 999?
    <nav>
      
      <div className="nav-wrapper">
        <div id="logomenu">
        <img id="logo" alt="logo" src={logodotei}></img>

        

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
      </div></div>
    </nav>:<div style={{marginLeft:(width-65)+'px' }} ><SideMenu /></div>
  );
}
