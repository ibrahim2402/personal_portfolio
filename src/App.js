import React from 'react';
import { Container, Grid} from '@material-ui/core';

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Resume from './pages/Resume/Resume'
import Portfolio from './pages/Portfolio/Portfolio'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Container className={'app_container'}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile/>
        </Grid>
        <Grid item xs >
        <Router>
          <Header/>
            <Switch>
            <Route path="/portfolio">
              <Portfolio/>
              </Route>
            <Route path="/">
              <Resume/>
              </Route>
            </Switch>
          </Router>  
          <Footer/>
        </Grid>
      </Grid> 
    </Container>
  );
};

export default App;
