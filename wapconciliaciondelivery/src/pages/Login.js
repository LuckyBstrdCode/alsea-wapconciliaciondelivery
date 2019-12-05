import React, { Component } from "react";
import { Link } from "react-router-dom";

import AlseaLogo from "../images/general/ALSEA-blanco.png";
import AlseaLogoBlue from "../images/general/ALSEA-azul.png";
import { Auth } from "aws-amplify";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: undefined
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {

      const user = await Auth.signIn(this.state.username, this.state.password);

      // const group = user.signInUserSession.accessToken.payload["cognito:groups"] ?
      //   user.signInUserSession.accessToken.payload["cognito:groups"] : ["Gerente"];

      // const group = user.attributes['custom:group'];
      const group = "Admin";

      const attributes = {
        countryId: user.attributes['custom:country'],
        branchId: user.attributes['custom:branch'] ? user.attributes['custom:branch'] : null,
        branchName: user.attributes['custom:branch_name'] ? user.attributes['custom:branch_name'] : '',
        brandId: user.attributes['custom:brand'],
        aggregatorId: null,
      }

      this.props.auth.setAuthStatus(true);
      this.props.auth.setParams(attributes);
      this.props.auth.setGroup(group);

      this.props.history.push({
        pathname: '/dashboard',
      })


    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  componentDidMount() {
    try {
      console.log("Eliminar Session");
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setParams(null);
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <div className=" container-fluid-login display_justify-content_center">
        <div className="login-a">
          <div className="login-logo">
            <img alt="Logo Alsea" src={AlseaLogo} />
            <p className="app-title">Conciliaciones</p>
          </div>

        </div>
        <div className="LogoLogin-On-Mobile">
          <img alt="Logo Alsea" src={AlseaLogoBlue} />
        </div>
        <div className="login-b">

          <div className=" card-login">
            <div className="card-head display_justify-content_center display_align_items_center ">


            </div>
            <div className="card-body">
              <h5 className="card-title-login mt-3">Entrar</h5>
              <p className="card-text font-w-200 muted  font-9">
                Escribe tu usuario y contraseña para poder acceder.
              </p>

              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">

                  <input
                    placeholder="Usuario"
                    onChange={this.handleChange}
                    type="text"
                    className="form-control border-r"
                    name="user"
                    id="username"
                  />
                </div>

                <div className="input-group mb-3">

                  <input
                    placeholder="Contraseña"
                    onChange={this.handleChange}
                    type="password"
                    className="form-control border-r"
                    id="password"
                  />
                </div>

                {this.state.error !== undefined}
                {
                  <span className="font-10 font-w-200 muted mb-3 _dangerous_letter">
                    {this.state.error}
                    <br />
                  </span>
                }

                <span className="font-10 font-w-200 muted mb-3">
                  ¿Olvidaste tu contraseña?{" "}
                </span>
                <Link
                  to={"/forgotpassword"}
                  className="txt-decoration-none font-10 font-w-200"
                >
                  Recuperar contraseña
                </Link>

                <div className="mt-3 col-12 text-right pr-0 pl-0">
                  <button className="border-none btn btn-primary btn-login  w-100 font-10">
                    ENTRAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
