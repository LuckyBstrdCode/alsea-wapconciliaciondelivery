import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Alsea from '../images/general/ALSEA-blanco.png';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light azul_alsea_back">
      <Link className="navbar-brand" to={'/'}>
        <img src={Alsea}/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active "> 
            <Link className="nav-link font-9 font-w-300" to={'/'}>HOME <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link font-9 font-w-300" to={'/'}>ALGO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link font-9 font-w-300" to={'/'}>ALGO MÁS</Link>
          </li>

        </ul>
        <ul class="navbar-nav">

<li class="nav-item dropdown">
  <a class="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <FontAwesomeIcon icon={faBars} />
  
  
  </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</li>
</ul>
  
      </div>
    </nav>

  );

}

export default Header;
