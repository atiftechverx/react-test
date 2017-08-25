import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
// import {Router, Route, browserHistory } from 'react-router';
import Home from '../components/Home.js'
import Signup from './Signup.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <Route path="/" component={Signup}/>
      </BrowserRouter>
    );
  }
}

export default App;
