import React from "react";
import { Route, Switch } from "react-router-dom";

import "../stylesheets/index.css";

import Search from "./Pages/Search";
import Repos from "./Pages/Repos";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/github-profiles">
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
