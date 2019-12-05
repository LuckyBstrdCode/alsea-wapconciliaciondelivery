import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { grey, blueGrey } from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AlseaLogoBlue from "../images/general/ALSEA-azul.png";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className={classes.list}>
      <div className="Logo-BoxMenu">
        <img alt="Logo Alsea" src={AlseaLogoBlue} />
        <p>Conciliaciones</p>
      </div>

      <Divider />

      <MenuItem style={{ color: blueGrey[700] }}>
        <Link to={'/register'}><PersonAddIcon className="pr-2" style={{ color: blueGrey[300] }} /> Registro </Link>
      </MenuItem>

      <MenuItem style={{ color: blueGrey[700] }}>
        <Link to={'/changepassword'}><VpnKeyIcon className="pr-2" style={{ color: blueGrey[300] }} /> Contraseña </Link>
      </MenuItem>

      <MenuItem style={{ color: blueGrey[700] }}>
        <Link to={"/"} className="hamburger-detail"><PowerSettingsNewIcon className="pr-2" style={{ color: blueGrey[300] }} /> Salir </Link>
      </MenuItem>

    </div>

  );


  return (
    <div>

      <Button onClick={toggleDrawer('left', true)}>
        <MenuIcon style={{ color: grey[50] }} />
      </Button>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div>
  );
}


