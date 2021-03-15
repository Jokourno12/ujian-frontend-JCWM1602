import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Checkout from './Pages/Checkout'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/checkout' component={Checkout} />
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
