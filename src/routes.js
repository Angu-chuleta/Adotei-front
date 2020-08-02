import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login'
import RegisterUser from './pages/RegisterUser';
import ProfileUser from './pages/ProfileUser';
import NewPet from './pages/NewPet';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/registeruser" component={RegisterUser}/>
                <Route path="/profileuser" component={ProfileUser}/>
                <Route path="/pet/new" component={NewPet}/>
                
            </Switch>
        </BrowserRouter>
    )
}
