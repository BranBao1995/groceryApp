import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/layout/layout';
import Signup from './containers/Signup/signup';
import Login from './containers/Login/login';
import Important from './containers/important/important';
import Logout from './containers/logout/logout';
import * as actions from './store/actions/index';
import './App.css';

class App extends Component {

  componentDidMount(){

    this.props.checkStatus();

  }

  render() {
    return (
      <div>
        <Switch>

          <Route path="/" exact component={Layout} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" component={Logout} />
          <Route path="/starred" component={Important} />

        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {

  return {

    checkStatus: () => dispatch(actions.authCheckStatus())

  }

}

export default withRouter(connect(null, mapDispatchToProps)(App));
