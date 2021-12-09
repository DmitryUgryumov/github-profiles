import React from "react";
import "../stylessheets/index.css";
import { Route, Switch } from "react-router-dom";
import Search from "./Pages/Search";
import Repos from "./Pages/Repos";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>

        <Route path="/repos/:login">
          <Repos />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
