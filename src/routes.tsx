import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login'
import RegisterUser from './pages/RegisterUser';
import ProfileUser from './pages/ProfileUser';
import NewPet from './pages/NewCase';
import Adocao from './pages/Adocao';
import Cabecalho from './pages/Cabecalho';
import BuscaPet from "./pages/BuscaPet"
import InfoPet from "./pages/InfoPet"
import ProfileOng from "./pages/ProfileOng"
export default function Routes(){
    return(
        
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/registeruser" component={RegisterUser}/>
                <Route path="/profileuser" component={ProfileUser}/>
                <Route path="/profileong" component={ProfileOng}/>
                <Route path="/new" component={NewPet}/>
                <Route path="/adocao" component={Adocao}/>
                <Route path="/buscar" component={BuscaPet}/>
                <Route path="/infopet" component={InfoPet}/>
                <Route path="/cabecalho" component={Cabecalho}/>
                <Route path="/buscapet" component={BuscaPet}/>
                
                
            </Switch>
            
        </BrowserRouter>
    )
}
