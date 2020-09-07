import React from 'react';
import "./styles.css"
import Cabecalho from "../Cabecalho"


//npm install @material-ui/core --save


export default function BuscaPet(){
  const nome = "Caramelin";
  const raca = "Raça não identificada";
  const idade = "6 meses";
  const cidade = "Vitória"

    return (
      <div >
          <Cabecalho/>
        <div className="profileUser-container">


            <h1>Animais de {cidade}</h1>
            <ul>
                <li>
                <strong>{nome}</strong>
                    <p>caso Teste</p>
                    <strong>{idade}</strong>
                    <p>Descricao Teste</p>
                    <strong>{raca}</strong>
                    <strong>{cidade}</strong>
                    <p>(27)4091-9240</p>

                </li>

                <li>
                    <strong>{nome}</strong>
                    <p>caso Teste</p>
                    <strong>{idade}</strong>
                    <p>Descricao Teste</p>
                    <strong>{raca}</strong>
                    <strong>{cidade}</strong>
                    <p>(27)4091-9240</p>

                </li>

                <li>
                <strong>{nome}</strong>
                    <p>caso Teste</p>
                    <strong>{idade}</strong>
                    <p>Descricao Teste</p>
                    <strong>{raca}</strong>
                    <strong>{cidade}</strong>
                    <p>(27)4091-9240</p>

                </li>
                
                <li>
                <strong>{nome}</strong>
                    <p>caso Teste</p>
                    <strong>{idade}</strong>
                    <p>Descricao Teste</p>
                    <strong>{raca}</strong>
                    <strong>{cidade}</strong>
                    <p>(27)4091-9240</p>

                </li>
            </ul>
            
        </div>
        </div>
        

    );
}