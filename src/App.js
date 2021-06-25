import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./index.css";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/main">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
