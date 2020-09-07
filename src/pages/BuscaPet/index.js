import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import "./styles.css"
import { Icon } from '@material-ui/core';

//npm install @material-ui/core --save


export default function BuscaPet(){

  
    return (
      <div className = "form-Search">
        <input type="text" placeholder="Buscar Animal..." />
      </div>
    );
}