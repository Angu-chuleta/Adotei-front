import React, { useState } from 'react';
import './styles.css';
import Cabecalho from '../Cabecalho';
import apiSevice from '../../services/api';

export default function NewCase() {
  const [name, setName] = useState('');
  const [foto, setFoto] = useState('');
  const [idade, setIdade] = useState('');
  const [sobre, setSobre] = useState('');
  const [porte, setPorte] = useState('');
  const foiAdotado = false;
  async function handleRegister() {
    // e.preventDefault();

    const data = {
      name,
      foto,
      porte,
      sobre,
      idade,
      foiAdotado,
    };

    try {
      const response = await apiSevice.post('pet', data);
      console.log(`Cadastro realizado com sucesso`, response.data);
    } catch (err) {
      console.log('Erro no cadastro tente novamente', err);
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
          <form onSubmit={handleRegister}>
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Porte"
              value={porte}
              onChange={(e) => setPorte(e.target.value)}
            />
            <input
              placeholder="Idade em meses"
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />

            <label>
              <textarea
                placeholder="Descrição:"
                value={sobre}
                onChange={(e) => setSobre(e.target.value)}
              />
            </label>
            <input
              placeholder="Imagem"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
