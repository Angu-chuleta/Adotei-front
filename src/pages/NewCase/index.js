import React from 'react';
import './styles.css';
import Cabecalho from "../Cabecalho"
export default function NewCase(){

    return(
       <div>
           <Cabecalho/>
            <div className="newCase-container">
            <div className="content">
                <section>
                    <h1>Nova Adoção</h1>
                </section>
                <form>
                    <input placeholder="Nome"></input>
                    <input placeholder="Porte" type="text" ></input>
                    <input placeholder="Informações" type="text" ></input>
                    <input placeholder="idade" ></input>
                    
                    <label for="msg"></label>
                    <textarea placeholder="Descrição:"  id="msg"></textarea>
                    <input type="file"
                        id="fotoPet" name="fotoPet"
                        accept="image/png, image/jpeg">

                    </input>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
            </div>
        </div>    
    );
}