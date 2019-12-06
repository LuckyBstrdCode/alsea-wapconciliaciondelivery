import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AlseaLogo from "../../images/general/ALSEA-blanco.png";
import AlseaCheck from "../../images/general/atention-success.png";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class ChangePasswordConfirmation extends Component {
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
            <p className="app-title font-9">CONCILACIONES</p>
          </div>
        </div>

        <div className="Return-Sign-Content-movile">
          <Link><ArrowBackIcon /></Link> 
        </div>


        <div className="login-b">
          <div className="card-login">
           

            <div className="card-body">
              <h2 className="text-center mt-2 card-title-login">¡Contraseña actualizada!</h2>
              <p className="text-center muted">Tu contraseña ha sido actualizada exitosamente</p>

              <div className="detail-icon animated heartBeat">
                <img src={AlseaCheck} alt="logo" />
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ChangePasswordConfirmation; 