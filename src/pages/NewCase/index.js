import React, { useState, useEffect } from "react";
import "./styles.css";
import Cabecalho from "../Cabecalho";
import { useHistory } from "react-router-dom";
import apiService from "../../services/api";
import ImageUploading from "react-images-uploading";


export default function NewCase() {
  const [ong, setOng] = useState([]);
  const [ongSelected, setOngSelected] = useState([]);
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChangeImage = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setFoto(`${imageList[0]!== undefined?imageList[0].data_url:''}`);

    
  };


  useEffect(() => {
    try {
          apiService.get("institution").then((response) => {
      setOng(response.data);
    });
    } catch (error) {
      
    }

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
    <div className="row">
      <Cabecalho />
      <div className="newCase-container ">
        <div className="content col s12 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
          <section>
            <h1>Nova Adoção</h1>
          </section>
          <form className="col s12 m8 offset-m2 l10 offset-l1" onSubmit={handleNewCase}>
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>
              <label>
                <input
                  name="porte"
                  value="Grande"
                  type="radio"
                  onChange={radioPorte}
                />
                <span>Grande</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="porte"
                  value="Médio"
                  type="radio"
                  onChange={radioPorte}
                />
                <span>Médio</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="porte"
                  value="Pequeno"
                  type="radio"
                  onChange={radioPorte}
                />
                <span>Pequeno</span>
              </label>
            </p>
            <input
              placeholder="Idade em meses"
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />

            <label htmlFor="msg"></label>
            <textarea
              placeholder="Descrição:"
              value={sobre}
              onChange={(e) => setSobre(e.target.value)}
            />
            {/* <input
              placeholder="Link da imagem aqui!!"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            /> */}

<div className="App">
            <ImageUploading
              multiple
              value={images}
              onChange={onChangeImage}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <a
                    className="waves-effect waves-light btn"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Adicione uma foto
                  </a>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button
                          className="waves-effect waves-light btn"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>
                        <button
                          className="waves-effect waves-light btn"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>

            <div>
              {ong.map((o) => (
                <p key={o._id}>
                  <label>
                    <input
                      
                      value={o._id}
                      onChange={radioChange}
                      name="ong"
                      type="radio"
                    />
                    <span>{o.name}</span>
                  </label>
                </p>
              ))}
            </div>

            <button
              className="button btn waves-effect waves-light"
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
