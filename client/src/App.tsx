import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing"
import Login from "./components/auth/LoginUI"
import Register from "./components/auth/Register"
import AlertComponent from './components/layout/alert'
import './App.css';

const App = () =>  {
  return (
    
    <Router>
      <Fragment>
        <NavBar></NavBar>
        <Route exact path = '/' component={Landing} />
        <section className = "container">
          <AlertComponent/>
          <Switch>
            <Route exact path = '/register' component = {Register}/>
            <Route exact path = '/login' component = {Login}/>
          </Switch>
        </section>
      </Fragment>
    </Router>
    
   
  );
}
export default App;
