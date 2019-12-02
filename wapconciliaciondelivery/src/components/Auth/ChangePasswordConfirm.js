import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AlseaLogo from "../../images/general/ALSEA-blanco.png";
import AlseaCheck from "../../images/general/atention-success.png";

class ChangePasswordConfirmation extends Component {
  render() {
    if (!this.props.auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <section className="section auth">
        <div className=" main-content container-fluid display_justify-content_center">
          <div className="card card-register col-12 col-xs-10 col-sm-8 col-md-6  col-lg-4 pl-0 pr-0">
            <div className="card-head p-4 display_justify-content_center display_align_items_center AzulClaroBkgd">
              <img alt="Logo Alsea" src={AlseaLogo} />
            </div>

            <div className="card-body">
              <h2 className="text-center mt-2">¡Contraseña actualizada!</h2>
              <p className="text-center text-muted">Tu contraseña ha sido actualizada exitosamente</p>

              <div className="detail-icon animated heartBeat">
                <img src={AlseaCheck} alt="logo" />
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default ChangePasswordConfirmation; 