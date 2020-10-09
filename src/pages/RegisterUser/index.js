import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import apiService from "../../services/api";
import "./styles.css";
// import ImageUploading from "react-images-uploading";

export default function RegisterUser() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [email, setEmail] = useState("");
  const [sobre, setSobre] = useState("");
  const [telefone, setTelefone] = useState("");
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");

  const [load, setLoad] = useState(false);
  const [formValido, setformValido] = useState(true);
  //const[city,setCity] = useState('');
  //const[state,setstate] = useState('');

  // const [images, setImages] = React.useState([]);
  // const maxNumber = 1;

  // const onChangeImage = (imageList, addUpdateIndex) => {
  //   console.log(imageList, addUpdateIndex);
  //   setImages(imageList);
  //   setFoto(`${imageList[0].data_url}`);
  // };
  function validaForm() {
    let filds = [foto, name, email, sobre, telefone, username, password];
    return (filds.filter((e) => e === "").length === 0);
  }

  async function handleRegister(e) {
    e.preventDefault();
    const role = 1;
    const credito = 0;
    setLoad(true);
    const data = {
      username,
      password,
      role,
      user: {
        name,
        foto,
        email,
        telefone,
        sobre,
        credito,
      },
    };
    if (validaForm()) {
      setformValido(true);
      try {
        const response = await apiService.post("auth/new", data);

        console.log("Cadastro realizado com sucesso", response.status);
        history.push("/");
      } catch (err) {
        console.log("Erro no cadastro tente novamente: ", err);
      }
    } else {
      setformValido(false);
    }

    setLoad(false);
  }

  return (
    <div className="row">
      <div className="caixaRegistro col s12 m4 offset-m4">
        <section className="col s12 sectionbox">
          <div className="col s2">
            <Link className=".back-link" to="/">
              <button className="waves-effect waves-light btn voltarbtn">
                Voltar
              </button>
            </Link>
          </div>
          <div className="col s12 m6 offset-m1">
            <h5 id="adotei">Faça cadastro no Adotei e ajude os bichinhos</h5>
          </div>
        </section>
        <form className="col s6 offset-s3" onSubmit={handleRegister}>
          <input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {formValido ? <div></div> : <span id="erro">campo obrigatório</span>}
          <input
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsename(e.target.value)}
          />
          {formValido ? <div></div> : <span id="erro">campo obrigatório</span>}
          <input
            placeholder="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formValido ? <div></div> : <span id="erro">campo obrigatório</span>}
          <input
            type="url"
            placeholder="Coloque o link da imagem aqui!"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
          {formValido ? <div></div> : <span id="erro">campo obrigatório</span>}
          {/* <div className="App">
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
                    Click or Drop here
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
          </div> */}

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formValido ? <div></div> : <span id="erro">campo obrigatório</span>}
          <input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          {formValido ? <div></div> : <span id="erro">campo obrigatório</span>}
          <input
            placeholder="Descrição"
            type="text"
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
          />
          {formValido ? <div></div> : <span id="erro">campo obrigatório</span>}
          {load ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ) : (
            <button 
              className="button btn waves-effect waves-light"
              
              type="submit"
              name="action"
            >
              Cadastrar
            </button>
          )}
        </form>
      </div>
    </div>
  );

  /*
                        <div className="input-group">
                        <input placeholder="Endereço"
                     value={adress}
                     onChange={e => setAdress(e.target.value)}                         
                        />
                        <input placeholder="Cidade"
                    value={city}
                    onChange={e => setCity(e.target.value)}                          
                        />
                        <input placeholder="UF" style={{whidth:80}}
                    value={state}
                    onChange={e => setstate(e.target.value)}                          
                        />
                    </div>
    
    
    */
}
