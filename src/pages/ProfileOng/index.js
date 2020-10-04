import React from 'react';
import {Link} from 'react-router-dom';
import {FiTrash2} from 'react-icons/fi';
import "./styles.css"
import Cabecalho from '../Cabecalho';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProfileOng(){

    return(
        <div>
            <Cabecalho/>
        <div className="profileUser-container">
            <header>
                <span>Bem vindo, Usuário</span>
                
                <Link className="button" to="/new">Cadastrar novo caso</Link>

            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>colocar foto lado Direito</strong>
                    <strong>Caso</strong>
                    <p>caso Teste</p>
                    <strong>Descricao</strong>
                    <p>Descricao Teste</p>
                    <strong>Contato</strong>
                    <p>(27)4091-9240</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>caso Teste</p>
                    <strong>Descricao</strong>
                    <p>Descricao Teste</p>
                    <strong>Contato</strong>
                    <p>(27)4091-9240</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>caso Teste</p>
                    <strong>Descricao</strong>
                    <p>Descricao Teste</p>
                    <strong>Contato</strong>
                    <p>(27)4091-9240</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                
                <li>
                    <strong>Caso</strong>
                    <p>caso Teste</p>
                    <strong>Descricao</strong>
                    <p>Descricao Teste</p>
                    <strong>Contato</strong>
                    <p>(27)4091-9240</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
            
        </div>
        </div>
    );
}