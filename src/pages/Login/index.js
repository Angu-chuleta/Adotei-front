import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
//import logodotei from '../../assets/imagens/logodotei.png'; <img src={logodotei} alt="Logo adotei" />
// para mudar o backgrou vai no global
import {FiLogIn} from 'react-icons/fi'
export default function Login(){

    return(
        <div className="login-container">
            <section className="form">
                <form>
                    <h1>Faça seu login</h1>
                        <input placeholder="Login"></input>
                        <input placeholder="Senha" type="password"></input>
                    <button className="button" type='submit'>Entrar</button>
                        <Link  className=".back-link" to="/registeruser">
                        <FiLogIn size={16} color="black"/> Não tenho Cadastro
                        </Link>
                    
                </form>
            </section>
            
        </div>
    );
}
//flex-direction: column;