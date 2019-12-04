import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserPlus, faUnlockAlt, faPowerOff, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Alsea from '../images/general/ALSEA-blanco.png';
import TemporaryDrawer from './../components/boxMenu';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark azul_alsea_back">
      <Link className="navbar-brand" to={'/'}>
        <img src={Alsea}/>
      </Link>
  
      <TemporaryDrawer>
  <FontAwesomeIcon icon={faBars} className=""/>
  </TemporaryDrawer>

      {/*  <div className="collapse navbar-collapse" id="navbarColor03">
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


        {/* <ul class="navbar-nav">

<li class="nav-item dropdown">
  
  <span className="show-hamburger-title" >Ver más <FontAwesomeIcon icon={faCaretDown}/></span> 

  
 
  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <Link class="dropdown-item" href="#">
    <FontAwesomeIcon icon={faUserPlus} className="mr-2"/> 
      Registro
    </Link>
    <Link class="dropdown-item" href="#">
    <FontAwesomeIcon icon={faUnlockAlt} className="mr-2"/> 
      Contraseña
    </Link>
    
    <Link class="dropdown-item" href="#">
    <FontAwesomeIcon icon={faPowerOff} className="mr-2"/> 
      Salir
    </Link>


  </div>
</li>
</ul> 
  
      </div>*/}
    </nav>

  );

}

export default Header;
