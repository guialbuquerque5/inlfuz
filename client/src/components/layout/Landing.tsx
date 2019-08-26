import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Influencer Connector</h1>
            <p className="lead">
              Create a influencer profile/portfolio, share posts and get help from
              other influencer
            </p>
            <div className="buttons">
            <Link to = '/register'> 
              <Button  className="btn btn-primary">Sign Up</Button>
            </Link>
              <a href="login.html" className="btn btn-light">Login</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Landing
