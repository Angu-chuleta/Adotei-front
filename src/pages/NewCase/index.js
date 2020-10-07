import React, { useState, useEffect } from "react";
import "./styles.css";
import Cabecalho from "../Cabecalho";
import { useHistory } from "react-router-dom";
import apiService from "../../services/api";
export default function NewCase() {
  const [ong, setOng] = useState([]);
  const [ongSelected, setOngSelected] = useState([]);

  useEffect(() => {
    apiService.get("institution").then((response) => {
      setOng(response.data);
    });
  }, []);

  function radioChange(e) {
    setOngSelected(e.target.value);
  }

  function radioPorte(e) {
    setPorte(e.target.value);
  }

  const history = useHistory();
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [idade, setIdade] = useState("");
  const [sobre, setSobre] = useState("");
  const [porte, setPorte] = useState("");
  const foiAdotado = false;
  let ongRadio;
  async function handleNewCase(e) {
    e.preventDefault();

    const data = {
      name,
      foto,
      porte,
      sobre,
      idade,
      foiAdotado,
      institution: ongSelected,
    };

    try {
      console.log(data);
      const response = await apiService.post("pet", data);
     console.log(`Cadastro realizado com sucesso`, response.data);

      history.push("/profileong");
    } catch (err) {
      console.log("Erro no cadastro tente novamente", err);
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
          <form onSubmit={handleNewCase}>
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>
              <label>
                <input name="group1" value="Grande" type="radio" onChange={radioPorte} />
                <span>Grande</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" value="Médio" type="radio" onChange={radioPorte} />
                <span>Médio</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" value="Pequeno" type="radio" onChange={radioPorte} />
                <span>Pequeno</span>
              </label>
            </p>
            <input
              placeholder="Idade em meses"
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />

            <label for="msg"></label>
            <textarea
              placeholder="Descrição:"
              value={sobre}
              onChange={(e) => setSobre(e.target.value)}
            />
            <input
              placeholder="Link da imagem aqui!!"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />

            <div>
              {ong.map((o) => (
                <p>
                  <label>
                    <input
                      key={o._id}
                      value={o._id}
                      onChange={radioChange}
                      name={ongRadio}
                      type="radio"
                    />
                    <span>{o.name}</span>
                  </label>
                </p>
              ))}
            </div>

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
