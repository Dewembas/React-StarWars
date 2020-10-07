import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './Pages/MainPage'
import PersonsPage from './Pages/PersonsPage'
import Menu from './Elements/Menu'
import PlanetPage from './Pages/PlanetPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Menu />
            <MainPage />
          </Route>
          <Route path="/persons">
            <Menu />
            <PersonsPage />
          </Route>
          <Route path="/planet">
            <Menu />
            <PlanetPage />
          </Route>
          <Route path="*">
            <Menu />
            <div>Path error: 404</div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
