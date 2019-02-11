import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EnmployeeEdit from './EmployeeEdit';
import EmployeeList from './EmployeeList';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/employees' exact={true} component={EmployeeList}/>
          <Route path='/employee/:id' component={EnmployeeEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;