import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Uploader from '../components/Uploader';

const noMatch = () => (
  <div>
    <p>Oops. Page not found :-(</p>
    <img
      alt="404 error"
      src="https://de7i3bh7bgh0d.cloudfront.net/2016/04/19/22/02/28/44/HxH001.jpg"
    />
  </div>
);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 top-padded">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={noMatch} />
          </Switch>
        </div>
      </main>
    );
  }
}

Main.defaultProps = {
  isAuthenticated: false,
};

Main.propTypes = {
  isAuthenticated: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.user !== null,
  };
}

export default withRouter(connect(mapStateToProps)(Main));
