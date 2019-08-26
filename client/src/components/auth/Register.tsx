import React,{Fragment, useState, Component, Props} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
//import { render } from 'react-dom';

interface IState {
    name: String,
    email: String,
    password: String,
    password2: String
}

class Register extends Component<IState> {
  state: IState = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };
    
  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}: {name: string; value: string} = e.target;
    this.setState({
        [name]: value
    })
  }
  private onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(this.state.password !== this.state.password2){
    console.log('Passwords do not match');  
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
                minLength={6}
                value = {String(password)}
                onChange={e => this.onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength={6}
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

export default connect(null, {setAlert})(Register)

