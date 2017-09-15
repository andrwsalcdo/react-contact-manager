import React, { Component } from 'react'
import Header from './components/Header'
import Contacts from './components/Contacts'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contacts />
      </div>
    );
  }
}

export default App
