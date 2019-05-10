import React from 'react';
import { Switch,Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Default from './components/Default'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path = '/' component = { ProductList } />
        <Route path = '/productdetails' component = { ProductDetails } />
        <Route path = '/cart' component = { Cart } />
        <Route component = { Default } /> 
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
