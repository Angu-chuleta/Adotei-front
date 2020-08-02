import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi';
import "./styles.css"

export default function ProfileUser(){

    return(
        <div className="profileUser-container">
            <header>
                <span>Bem vindo, Abençoado</span>
                <Link className="button" to="pet/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#FFF"/>
                </button> 
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
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
    );
}