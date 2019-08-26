import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./components/layout/Navbar"
import AppBar from "./components/layout/ProfileAppbar"
import Landing from "./components/layout/Landing"
import Login from "./components/auth/LoginUI"
import Register from "./components/auth/Register"
//Redux
import { Provider } from 'react-redux'
import AppState from './store'

import './App.css';

const mapStateToProps = (state: AppState) => ({
  alert: state.alert
})

const App: React.FC = () => {
  return (
    <Provider store ={AppState}>
      <Router>
        <Fragment>
          <NavBar></NavBar>
          <Route exact path = '/' component={Landing} />
          <section className = "container">
            <Switch>
              <Route exact path = '/register' component = {Register}/>
              <Route exact path = '/login' component = {Login}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
