import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductEdit from './ProductEdit';
import FnD from './FoodnDrinks';
import Prod from './Prod';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch> 
          <Route path='/' exact={true} component={Home}/>
          <Route path='/products' exact={true} component={ProductList}/>
          <Route path='/product/:id'  component={ProductEdit}/>
          <Route path='/category/:type' exact={true}  component={FnD}/>
          <Route path='/items/:prodId' exact={true}  component={Prod}/>
        </Switch>
      </Router>
    )
  }
}

export default App;