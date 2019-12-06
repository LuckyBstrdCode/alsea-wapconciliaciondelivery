import React, { Component } from 'react';

import { Redirect } from "react-router-dom";
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
import AlseaLogo from "../../images/general/ALSEA-blanco.png";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class ChangePassword extends Component {
  state = {
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      await Auth.changePassword(
        user,
        this.state.oldpassword,
        this.state.newpassword
      );
      this.props.history.push("/changepasswordconfirmation");
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: { ...this.state.errors, cognito: err }
      });
      console.log(err);
    }
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    
  if (!this.props.auth.isAuthenticated) {
    return <Redirect to="/" />;
  }
    return (
      <section className="section auth">
        
        <div className=" container-fluid-login">
        <div className="login-a">
        <div className="Return-Sign-Content">
       <Link><ArrowBackIcon /></Link> 
        </div>
          <div className="login-logo">
            <img alt="Logo Alsea" src={AlseaLogo} />
            <p className="app-title font-9">CONCILACIONES / New Password</p>
          </div>
        </div>

        <div className="Return-Sign-Content-movile">
          <Link><ArrowBackIcon /></Link> 
        </div>


        <div className="login-b">
        <div className="card-login">

          
            <div className="card-body">
            <h5 className="card-title-login mt-3">Cambiar contraseña</h5>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit} className="row">
            <div className="col-12 form-group">
           
                <input 
                className="form-control"
                  type="password"
                  id="oldpassword"
                  placeholder="Antigua contraseña"
                  value={this.state.oldpassword}
                  onChange={this.onInputChange}
                />
        
           
            </div>


            <div className="col-12 form-group">
              
                <input
                 className="form-control"
                  type="password"
                  id="newpassword"
                  placeholder="Nuevo contraseña"
                  value={this.state.newpassword}
                  onChange={this.onInputChange}
                />
              
            </div>

           <div className="col-12 form-group">
              
                <input
                  className="form-control"
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirmar contraseña"
                  value={this.state.confirmpassword}
                  onChange={this.onInputChange}
                />
               
            </div>
            
            <div className="mt-3 col-12 text-right">
              <p className="control ">
                <button className="border-none btn btn-primary btn-login  w-100 font-10">
                  Actualizar contraseña 
                </button>
              </p>
            </div>
          </form>
        </div>
        </div>
        </div>
        </div>
      </section>
    );
  }
}

export default ChangePassword;