import React from "react";
import "../stylesheets/index.css";
import { Route, Switch } from "react-router-dom";
import Search from "./Pages/Search";
import Repos from "./Pages/Repos";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Search />
        </Route>

        <Route path="/repos/:login">
          <Repos />
        </Route>
      </Switch>
    </>
  );
}

export default App;
