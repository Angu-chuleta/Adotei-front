import React from 'react';
import {FiSearch} from 'react-icons/fi/'
import "./styles.css"

//npm install @material-ui/core --save


export default function BuscaPet(){

  
    return (
      <div classeName="busca-container">
      <input type="search"></input>  
      <FiSearch size={30} color="black"> Buscar Pet</FiSearch>
      </div>
    );
}