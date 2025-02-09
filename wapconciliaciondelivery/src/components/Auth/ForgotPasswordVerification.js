import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
import AlseaLogo from "../../images/general/ALSEA-blanco.png";



class ForgotPasswordVerification extends Component {
  state = {
    verificationcode: "",
    email: "",
    newpassword: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  passwordVerificationHandler = async event => {
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
      await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.verificationcode,
        this.state.newpassword
      );
      this.props.history.push("/changepasswordconfirmation");
    }catch(error) {
      console.log(error);
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (



      <section className="section auth">

<div className=" container-fluid-login display_justify-content_center">

     <div className="login-a">
          <div className="login-logo">
          <img alt="Logo Alsea" src={AlseaLogo} />
          <p className="app-title">New Password</p>
          </div>
       
        </div>

        <div className="login-b">
        <div className="card-login">
        <div className="card-head p-4 display_justify-content_center display_align_items_center AzulClaroBkgd">
        <img alt="Logo Alsea" src={AlseaLogo} />
    
            </div>

            <div className="card-body">
            <h5 className="card-title-login mt-3">Establecer nueva contraseña</h5>

       
              <p className="card-text font-w-200 muted  font-9">
            Por favor ingresa el código de verificación enviado a tu email, tu dirección de correo y una nueva contraseña.
         
              </p>
          
              <FormErrors formerrors={this.state.errors} />

<form onSubmit={this.passwordVerificationHandler} className="row">
   
  <div className="field col-12 form-group " >
   
      <input
        type="text"
        className="form-control"
        id="verificationcode"
        aria-describedby="verificationCodeHelp"
        placeholder="Código de verificación"
        value={this.state.verificationcode}
        onChange={this.onInputChange}
      />
    
  </div>
  <div className="field col-12 form-group ">
    
      <input 
        className="form-control" 
        type="email"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Email"
        value={this.state.email}
        onChange={this.onInputChange}
      />

  </div>
  <div className="field field col-12 form-group ">
   
      <input
        type="password"
        className="form-control"
        id="newpassword"
        placeholder="Nueva contraseña"
        value={this.state.newpassword}
        onChange={this.onInputChange}
      />
  
  </div>

  <div className="field col-12 text-right ">
              <p className="control ">
                <button className="border-none btn btn-primary btn-login w-100 font-10 ">
                  Enviar
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

export default ForgotPasswordVerification;