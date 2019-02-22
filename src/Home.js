import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import {Container } from 'reactstrap';
import FnD from './icons/FnDnew.png';
import GP from './icons/GPnew.png';
import CP from './icons/CPnew.png';
import create from './icons/createnew.png';

class Home extends Component {
  




  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid id="space" align="center">
          <Link to="category/foodndrinks" > <img src={FnD} id="img" alt="Food and Drinks"/></Link>
          <Link to="/product/new" > <img src={create} id="img" style={{marginLeft:"20px"}} alt="create new product"/></Link>
        </Container>
        <Container fluid id="space" align="center">
        <Link to="category/groomingprods"><img src={GP} id="img" alt="Grooming Products"/></Link>
        <Link to="category/cleaningprods"><img src={CP} id="img" alt="Cleaning Products"/></Link>
          </Container>
          <Container fluid id="space" align="center">
          
          </Container>
          <Container>

            </Container>
      </div>
    );
  }
}

export default Home;
