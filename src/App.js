import React, { Component,express} from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';
import Product from './component/Product/Product.js';
import Parent from './component/Parent/Parent.js';


const bodyParser=require('body-parser');

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Dashboard />
      <Form />
      <Product />
      </div>
    );
  }
}

export default App;
