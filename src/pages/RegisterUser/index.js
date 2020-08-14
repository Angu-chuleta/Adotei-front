import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

export default function RegisterUser(){

    return(
        
        <div className="registerUser-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça cadastro no Adotei e ajude os bichinhos </p>
                    <Link  className=".back-link" to="/">
                        <FiArrowLeft size={16} color="black"/> Voltar
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome"></input>
                    <input placeholder="Foto" type="input" ></input>
                    <input placeholder="Telefone" type="text" ></input>
                    <input placeholder="Descrição" type="text" ></input>
                    <input placeholder="Conta para doação" ></input>
                    <div className="input-group">
                        <input placeholder="Endereço"/>
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{whidth:80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}