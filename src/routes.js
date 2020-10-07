import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import ProfileUser from "./pages/ProfileUser";
import NewPet from "./pages/NewCase";
import Adocao from "./pages/Adocao";
import Cabecalho from "./pages/Cabecalho";
import BuscaPet from "./pages/BuscaPet";
import GuardedRoute from "./services/guardedRoutes";
import ProfileOng from "./pages/ProfileOng";
export default function Routes() {
  let storage = JSON.parse(localStorage.getItem("adotei@token") | {});

  function estaAutenticado() {
    return storage.token !== "";
  }

  let autenticado = estaAutenticado();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registeruser" component={RegisterUser} />
        <GuardedRoute
          path="/profileuser"
          component={ProfileUser}
          auth={autenticado}
        />
        <GuardedRoute
          path="/profileong"
          component={ProfileOng}
          auth={autenticado}
        />
        <GuardedRoute path="/new" component={NewPet} auth={autenticado} />
        <GuardedRoute path="/adocao" component={Adocao} auth={autenticado} />
        <GuardedRoute path="/buscar" component={BuscaPet} auth={autenticado} />
        <GuardedRoute
          path="/cabecalho"
          component={Cabecalho}
          auth={autenticado}
        />
        <GuardedRoute
          path="/buscapet"
          component={BuscaPet}
          auth={autenticado}
        />
      </Switch>
    </BrowserRouter>
  );
}
