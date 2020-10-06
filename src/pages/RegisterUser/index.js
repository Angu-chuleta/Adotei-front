import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import apiService from '../../services/api';
import './styles.css';

export default function RegisterUser() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [foto, setFoto] = useState('');
  const [email, setEmail] = useState('');
  const [sobre, setSobre] = useState('');
  const [telefone, setTelefone] = useState('');
  const [username, setUsename] = useState('');
  const [password, setPassword] = useState('');
  //const[city,setCity] = useState('');
  //const[state,setstate] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    const role = 1;
    const credito = 0;

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

    try {
      const response = await apiService.post('auth/new', data);

      console.log('Cadastro realizado com sucesso', response.status);
      history.push('/');
    } catch (err) {
      console.log('Erro no cadastro tente novamente: ', err);
    }
  }

  return (
    <div className="registerUser-container">
      <div className="content">
        <section>
          <p>Faça cadastro no Adotei e ajude os bichinhos</p>

          <button className="waves-effect waves-light btn">
            <Link className=".back-link" to="/">
              Voltar
            </Link>
          </button>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsename(e.target.value)}
          />
          <input
            placeholder="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input
                type="file"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            placeholder="Descrição"
            type="text"
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
          />

          <button
            className="button btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Cadastrar
          </button>
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
