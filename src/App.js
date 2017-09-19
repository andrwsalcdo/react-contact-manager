import React, { Component } from 'react'
import Header from './components/Header'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddContact />
        <Contacts />
      </div>
    );
  }
}

export default App
