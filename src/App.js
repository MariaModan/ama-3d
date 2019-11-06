import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import DefaultPage from './components/default-page/DefaultPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Route exact path='/' component={DefaultPage} /> */}
        <Route exact path='/culori-noi' component={DefaultPage} />
      </Switch>
    </div>
  );
}

export default App;
