import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar'
import { BrowserRouter } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div >
        <Navbar/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
