import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
import AlseaLogo from "../../images/general/ALSEA-blanco.png";

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
        <div className=" main-content container-fluid display_justify-content_center">
        <div className="card card-register col-12 col-xs-10 col-sm-8 col-md-6  col-lg-4 pl-0 pr-0">
        <div className="card-head display_justify-content_center display_align_items_center AzulClaroBkgd">
        <img alt="Logo Alsea" src={AlseaLogo} />
    
            </div>
            <h5 className="card-title text-center mt-3">Cambiar contraseña</h5>
            <div className="card-body">
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
            
            <div className="field col-12 text-right">
              <p className="control ">
                <button className="border-none btn btn-primary text-left primary-green-back">
                  Actualizar contraseña 
                </button>
              </p>
            </div>
          </form>
        </div>
        </div>
        </div>
      </section>
    );
  }
}

export default ChangePassword;