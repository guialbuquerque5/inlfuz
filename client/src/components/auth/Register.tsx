import React,{Fragment, useState, Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store'

import * as AlertActions from '../../store/ducks/alert/actions'

//import { render } from 'react-dom';




interface IState {
    name: String,
    email: String,
    password: String,
    password2: String
}
interface IProps {
  state: IState
  setAlert(msg: string): void
}

type Props = IState & IProps


class Register extends Component<Props> {
  state: IState = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };
  count = 1
  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}: {name: string; value: string} = e.target;
    this.setState({
      [name]: value
    })
  }
  private onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(this.state.password !== this.state.password2){
      this.props.setAlert('Passwords do not match' + this.count++);  
    } else {
      const {name, email, password} =this.state
      console.log(JSON.stringify({name, email, password}))
    }
  }
  public render() {
    const {name, email, password, password2} = this.state;
    return (
      <Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e => this.onSubmit(e)}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Name" 
                name="name" 
                value = {String(name)} 
                onChange={e => this.onChange(e)} 
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="email"   
                placeholder="Email Address"
                name="email"
                value = {String(email)}
                onChange={e => this.onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength={1}
                value = {String(password)}
                onChange={e => this.onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength={1}
                value = {String(password2)}
                onChange={e => this.onChange(e)}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  alerts: state.alert
});


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AlertActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register)

