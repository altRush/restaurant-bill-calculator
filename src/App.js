import React, { Component } from 'react';
import './App.css';
import BillForm from './components/BillForm';

class App extends Component {
  render() {
    return (
      <div className="App vh-100 pt4-ns pt3">
        <BillForm />
      </div>
    );
  }
}

export default App;
