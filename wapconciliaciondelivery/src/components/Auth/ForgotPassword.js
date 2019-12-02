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
        <div className=" main-content container-fluid display_justify-content_center">
          <div className="card card-register col-12 col-xs-10 col-sm-8 col-md-6  col-lg-4 pl-0 pr-0">
            <div className="card-head p-4 display_justify-content_center display_align_items_center AzulClaroBkgd">
              <img alt="Logo Alsea" src={AlseaLogo} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center mt-3">¿Olvidaste tu contraseña?</h5>
              <p className="card-text font-w-200 muted text-center font-9">
                Ingresa la dirección de correo asociada a tu cuenta y nosotros te enviaremos un email con un link para reestablecer tu contraseña.
              </p>

              <form onSubmit={this.forgotPasswordHandler}>

                <div className="col-12 form-group">
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

                <div className="field col-12 text-right">
                  <p className="control ">
                    <button className="button is-success border-none btn btn-primary text-left primary-green-back">
                      Enviar
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

export default ForgotPassword;