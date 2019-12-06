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

  protectedComponent = () => {
    // if (authFails)
    //   return <Redirect to='/login' />
    console.info(this.state.isAuthenticated);
    return this.state.isAuthenticated;
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
      console.info(user);

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
      this.setAuthStatus(false);
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
              render={props => {
                return <ForgotPassword {...props} auth={authProps} />
              }}
            />

            <Route exact path="/forgotpasswordverification"
              render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />}
            />



               <Route exact
                path="/register"
                render={props => {
                  if (this.protectedComponent()) {
                    return <Register {...props} auth={authProps} />
                  }
                  return <Redirect to='/' />
                }}
              /> 

             <Route exact path="/changepassword"

            render={props => {
            if (this.protectedComponent()) {
            return <ChangePassword {...props} auth={authProps} />
             }
            return <Redirect to='/' />
            }}
            />

            <Route exact path="/changepasswordconfirmation"
                render={props => {
                  if (this.protectedComponent()) {
                    return <ChangePasswordConfirm {...props} auth={authProps} />
                  }
                  return <Redirect to='/' />
                }}
              />

            <Layout vistaPrevia={this.state.vistaPrevia} auth={authProps}>

              <Route
                exact
                path="/dashboard"
                render={props => {
                  if (this.protectedComponent()) {
                    return <Dashboard {...props} auth={authProps} />
                  }
                  return <Redirect to='/' />
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
