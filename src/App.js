import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Header from './components/Header';
import Main from './components/Main';
import Intro from './components/Intro';
import Service from './components/Service';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Intro />
        <Service />
        <Product />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
