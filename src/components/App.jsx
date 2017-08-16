import React, { Component } from 'react';

import logo from '../assets/logo.svg';
import '../assets/styles/app.css';

import Header from './Header';

const App = () => (
  <div className="App">
    <Header />
    <p className="App-intro">
      To get started, edit <code>src/components/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
