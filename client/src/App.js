import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Police from './components/police';
import Carowner from './components/carowner';
import Admin from './components/admin';
import Menu from './components/menu';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route path="/carowner" component={Carowner} />
          <Route path="/police" component={Police} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
