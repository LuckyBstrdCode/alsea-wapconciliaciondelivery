import React, { Fragment } from "react";
import { Auth } from "aws-amplify";
import AlseaLogo from "../images/general/ALSEA-blanco.png";
import ModalInfo from "../components/ModalInfo";
import api from "../services/ServiceGeneral";


export default function Register( ) {

  const [name, guardarName] = React.useState('');
  const [lastName, guardarLastname] = React.useState('');
  const [password, guardarPassword] = React.useState('');
  const [email, guardarEmail] = React.useState('');
  const [countries, guardarCountries] = React.useState([]);
  const [brands, guardarBrands] = React.useState([]);
  const [branches, guardarBranches] = React.useState([]);
  const [countryId, guardarCountryId] = React.useState("0");
  const [brandId, guardarBrandId] = React.useState("0");
  const [branchId, guardarBranchId] = React.useState("0");
  const [branchName, guardarBranchName] = React.useState('');
  const [groups, guardarGroup] = React.useState('');
  const [error, guardarError] = React.useState('');

  const [disableCountry, guardarDisableCountry] = React.useState(true);
  const [disableBrands, guardarDisableBrands] = React.useState(true);
  const [disableBranchs, guardarDisableBranchs] = React.useState(true);


  React.useEffect(() => {
    const consultarAPI = async () => {
      const dataCountries = await api.services.listCountries();
      guardarCountries(dataCountries.content);
    }
    consultarAPI();
  }, []);


  const handleChangeCountry = async e => {
    const countryId = e.target.value;
    const dataBrands = await api.services.listBrands(countryId);
    console.info(dataBrands.content);

    guardarBrands(dataBrands.content);
    guardarCountryId(countryId);
    guardarBranches([]);
    guardarBrandId("0");
    guardarBranchId("0");
    guardarBranchName('');
  };

  const handleClickBrand = async e => {
    try {
      const brandId = e.target.value;
      let dataBranches = await api.services.listBranches(countryId, brandId);
      console.info(dataBranches.content);
      guardarBranches(dataBranches.content);
      guardarBrandId(brandId);
      guardarBranchId(0);
      guardarBranchName('');

    } catch (error) {
      guardarError(error);
    }
  };


  const handleSubmit = async event => {
    event.preventDefault();

    console.info("username-email: " + email);
    console.info("password: " + password);
    console.info("name: " + name);
    console.info("last_name: " + lastName);
    console.info("email: " + email);

    console.info("country: " + countryId);
    console.info("brand: " + brandId);
    console.info("branch: " + branchId);
    console.info("branch_name: " + branchName);

    console.info("groups: " + groups);

    if (validateParams()) {
      try {
        await Auth.signUp({
          username: email,
          password,
          attributes: {
            email: email,
            name: name,
            "custom:last_name": lastName,
            "custom:country": countryId,
            "custom:brand": brandId,
            "custom:branch": branchId,
            "custom:branch_name": branchName,
            // "custom:groups": groups,
          }
        });
        console.info("Exito!!");
        // this.props.history.push("/dashboard");
      } catch (error) {
        console.info(error);
        guardarError(error);

      }
    }
  };

  const validateParams = () => {
    console.info("****************************");
    console.info("Validaciones::::");
    let errors = [];

    if (name === '') {
      errors.push("Name empty/undefined/null");
    }

    if (lastName === '') {
      errors.push("LastName empty/undefined/null");
    }

    if (email === '') {
      errors.push("Email empty/undefined/null");
    }

    if (password === '') {
      errors.push("Password empty/undefined/null");
    }

    if (groups === '') {
      errors.push("Grupo empty/undefined/null");
    } else if (groups !== "Admin" && groups !== "Coordinador") {

      if (countryId === "0") {
        errors.push("countryId empty/undefined/null");
      }
      if (brandId === "0") {
        errors.push("Marca empty/undefined/null");
      }

      if (groups === "Gerente") {
        if (branchId === "0") {
          errors.push("Sucursal empty/undefined/null");
        }
      }
    }

    console.info(errors);
    return errors.length === 0;
  }

  const handleChangeGroup = e => {
    guardarGroup(e.target.value)
    guardarDisableCountry(false);
    guardarDisableBranchs(false);
    guardarDisableBrands(false);
    guardarCountryId("0");
    guardarBranches([]);
    guardarBrands([]);
    guardarBrandId("0");
    guardarBranchId("0");
    guardarBranchName('');
    if (e.target.value === 'Admin' || e.target.value === 'Coordinador') {
      guardarDisableCountry(true);
      guardarDisableBranchs(true);
      guardarDisableBrands(true);
    } else if (e.target.value === 'Marca') {
      guardarDisableBranchs(true);
    }
  };

  const handleChangeBranch = e => {
    const branch = document.getElementById("branch");
    const branchName = branch.options[e.target.selectedIndex].text;
    guardarBranchId(e.target.value);
    guardarBranchName(branchName);
  };

  return (
    <Fragment>
      <div className="main-content container-fluid display_justify-content_center">
        <div className="card card-login">
          <div className="card-head display_justify-content_center display_align_items_center AzulClaroBkgd">
            <img alt="Logo Alsea" src={AlseaLogo} />
          </div>
          <h5 className="card-title text-center mt-3">Registrar usuario</h5>

          <div className="card-body">
            <form
              onSubmit={handleSubmit}
              className="row">

              <div className="col-12 col-xs-12 col-sm-6  col-md-6 col-lg-6">
                <div className="form-group">
                  <input
                    placeholder="Nombre"
                    className="form-control"
                    id="name"
                    onChange={(e) => guardarName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Apellido"
                    type="text"
                    className="form-control"
                    id="lastName"
                    onChange={(e) => guardarLastname(e.target.value)}

                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Contraseña"
                    type="text"
                    className="form-control"
                    id="password"
                    onChange={(e) => guardarPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => guardarEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-12 col-xs-12 col-sm-6  col-md-6 col-lg-6">
                <div className="form-group">
                  <select className="form-control" id="group" onChange={handleChangeGroup} >
                    <option value="">Seleccionar Grupo</option>
                    <option value="Admin">Administrador</option>
                    <option value="Coordinador">Coordinador</option>
                    <option value="Gerente">Gerente</option>
                    <option value="Marca">Marca</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-control"
                    id="country"
                    onChange={handleChangeCountry}
                    value={countryId}
                    disabled={disableCountry}
                  >
                    <option key="0" value="0">Todos los países</option>
                    {countries.map(country => {
                      return <option key={country.id} value={country.id}>{country.name}</option>
                    })}
                  </select>
                </div>


                <div className="form-group">
                  <select
                    className="form-control"
                    id="brand"
                    onChange={handleClickBrand}
                    disabled={disableBrands}
                  >
                    <option key="0" value="0">Todas las marca</option>
                    {brands.map(brand => {
                      return <option key={brand.id} value={brand.id}>{brand.name}</option>
                    })}
                  </select>
                </div>


                <div className="form-group">
                  <select
                    className="form-control"
                    id="branch"
                    onChange={handleChangeBranch}
                    disabled={disableBranchs}
                  >
                    <option value="0">Todas las sucursal</option>
                    
                    {branches.map(branch => {
                      return <option key={branch.id} value={branch.id}>{branch.name}</option>
                    })}

                  </select>
                </div>
              </div>

              <div className="col-12 text-right">
                <button className="border-none btn btn-primary text-left primary-green-back">
                  Registrar
                  </button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <ModalInfo message={error}></ModalInfo>
    </Fragment>
  );
}
