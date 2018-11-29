import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateBlog from './components/Blog/CreateBlog'
import Dashboard from './components/Dashboard/Dashboard'
import BlogDetails from './components/Blog/BlogDetails'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div >
        <Navbar/>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/create' component={CreateBlog}/>
        <Route path='/blog/:id' component={BlogDetails}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
