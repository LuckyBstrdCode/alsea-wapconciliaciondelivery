import React, { Component } from 'react';
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
import AlseaLogo from "../../images/general/ALSEA-blanco.png";

class ForgotPassword extends Component {
  state = {
    email: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  }

  forgotPasswordHandler = async event => {
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
      console.log(this.state.email);
      await Auth.forgotPassword(this.state.email);
      this.props.history.push('/forgotpasswordverification');
    } catch (error) {
      this.setState({
        errors: {
          cognito: error.message,
          blankfield: false
        }
      });
      if (this.state.errors.cognito) {
        console.log("no vacio");
      }
    }
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <section className="section auth">
        <div className=" container-fluid-login display_justify-content_center">
        
        <div className="login-a">
          <div className="login-logo">
          <img alt="Logo Alsea" src={AlseaLogo} />
          <p className="app-title">Password</p>
          </div>
       
        </div>
          

        <div className="login-b">
          <div className="card-login">
            <div className="card-head p-4 display_justify-content_center display_align_items_center AzulClaroBkgd">
              <img alt="Logo Alsea" src={AlseaLogo} />
            </div>
            <div className="card-body">
            <h5 className="card-title-login mt-3">¿Olvidaste tu contraseña?</h5>
 
              <p className="card-text font-w-200 muted  font-9">
                Ingresa la dirección de correo asociada a tu cuenta y nosotros te enviaremos un email con un link para reestablecer tu contraseña.
              </p>

              <form onSubmit={this.forgotPasswordHandler}>

                <div className="col-12 form-group pr-0 pl-0">
                  <input 
                    className="form-control"
                    type="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onInputChange}
                  />

                  {this.state.errors.cognito !== null}
                  {
                    <span className="font-10 font-w-200 muted mb-3 _dangerous_letter">
                      {this.state.errors.cognito}
                      <br />
                    </span>
                  }

                </div>

                <div className="field col-12 text-right pr-0 pl-0">
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

export default ForgotPassword;