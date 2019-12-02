import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Auth } from "aws-amplify";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

import ForgotPassword from "./components/Auth/ForgotPassword";
import ForgotPasswordVerification from './components/Auth/ForgotPasswordVerification';
import ChangePassword from './components/Auth/ChangePassword';
import ChangePasswordConfirm from './components/Auth/ChangePasswordConfirm';
import Register from "./pages/Register";

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      params: null,
      group: null,
      vistaPrevia: null,
    };
  }

  updateValuesSuperMenu = (props) => {
    this.setState({
      vistaPrevia: props
    });
  }

  setAuthStatus = status => {
    this.setState({ isAuthenticated: status });
  };

  setParams = params => {
    this.setState({ params: params });
  };

  setGroup = group => {
    this.setState({ group: group });
  };

  async componentDidMount() {

    try {
      this.setAuthStatus(true);
      const user = await Auth.currentAuthenticatedUser();

      // const group = user.attributes['custom:group'];
      const group = "Admin";

      const attributes = {
        countryId: user.attributes['custom:country'],
        branchId: user.attributes['custom:branch'] ? user.attributes['custom:branch'] : null,
        branchName: user.attributes['custom:branch_name'] ? user.attributes['custom:branch_name'] : '',
        brandId: user.attributes['custom:brand'],
        aggregatorId: null,
      }

      this.setParams(attributes);
      this.setGroup(group);
    } catch (error) {
      console.log(error);
    }
    this.setState({ isAuthenticating: false });
  }

  render() {

    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      params: this.state.params,
      group: this.state.group,
      setAuthStatus: this.setAuthStatus,
      setParams: this.setParams,
      setGroup: this.setGroup
    };
    return (
      !this.state.isAuthenticating && (
        <BrowserRouter>
          <Switch>
            <Route exact path="/"
              render={props => <Login {...props} auth={authProps} />} />

            <Route exact path="/forgotpassword"
              render={(props) => <ForgotPassword {...props} auth={authProps} />} />

            <Route exact path="/forgotpasswordverification"
              render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />

            <Layout vistaPrevia={this.state.vistaPrevia} auth={authProps}>

              <Route exact path="/changepassword"
                render={(props) => <ChangePassword {...props} auth={authProps} />} />

              <Route exact path="/changepasswordconfirmation"
                render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />

              <Route exact
                path="/register"
                render={props => {
                  if (!this.state.isAuthenticated) {
                    return <Redirect to='/' />
                  } else if (this.state.group && (this.state.group === "Admin" || this.state.group === "Coordinador")) {
                    return <Register {...props} auth={authProps} roleParams={this.state.params} />
                  }
                  return <Redirect to='/dashboard' />
                }} />
              
              <Route
                exact
                path="/dashboard"
                render={props => {
                  return <Dashboard {...props} auth={authProps} />
                }}
              />

            </Layout>
          </Switch>
        </BrowserRouter>
      )
    );
  }
} 

export default App;
