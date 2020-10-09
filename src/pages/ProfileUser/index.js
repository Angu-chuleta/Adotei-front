import React, { useEffect } from "react";
import "./styles.css";
import Cabecalho from "../Cabecalho";
import { FaHandHoldingHeart } from "react-icons/fa";
import apiService from "../../services/api";
import { useHistory } from "react-router-dom";

export default function ProfileUser() {
  const [perfil, setPerfil] = React.useState({});
  const history = useHistory();

  async function addCredito() {
    await apiService.post(`/user/${perfil._id}/addcredit`, { credito: 1 });
    apiService.get(`/user/${perfil._id}/`).then((r) => {
      console.log(r.data);
      setPerfil(r.data);
      localStorage.setItem("adotei@perfil", JSON.stringify(r.data));
    });
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("adotei@token"));
    if (storage === null) {
      history.push("/");
    } else {
      apiService.get(`/user/${storage.user._id}/`).then((r) => {
        console.log(r.data);
        setPerfil(r.data);
        localStorage.setItem("adotei@perfil", JSON.stringify(r.data));
      });
    }
  }, [history]);

  return (
    <div>
      <Cabecalho />
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="row box z-depth-3">
            <div className="perfil col s6">
              <img
                className="circle responsive-img"
                id="fotoPerfil"
                alt={"foto de " + perfil.name}
                src={perfil.foto}
              ></img>
              <div className="dadosPerfil">
                <h2 id="conta">{perfil.name}</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>Sobre:</td>
                      <td>{perfil.sobre}</td>
                    </tr>
                    <tr>
                      <td>email:</td>
                      <td>{perfil.email}</td>
                    </tr>
                    <tr>
                      <td>telefone:</td>
                      <td>{perfil.telefone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="conta col s2">
              <div id="saldo">
                Saldo: <FaHandHoldingHeart /> {perfil.credito}
              </div>
              <button
                onClick={addCredito}
                className="waves-effect waves-light btn"
              >
                Adicionar fundos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
