import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Alsea from '../images/general/ALSEA-blanco.png';
import TemporaryDrawer from './../components/boxMenu';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark azul_alsea_back">
      <Link className="navbar-brand" to={'/dashboard'}>
        <img src={Alsea} />
      </Link>

      <TemporaryDrawer>
        <FontAwesomeIcon icon={faBars} className="" />
      </TemporaryDrawer>

    </nav>
  );

}

export default Header;
