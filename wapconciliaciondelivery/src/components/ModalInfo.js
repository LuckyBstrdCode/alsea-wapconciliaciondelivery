import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import LocationCityIcon from '@material-ui/icons/LocationCity';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import { green, grey } from '@material-ui/core/colors';


// const ButtonOk = withStyles(theme => ({
//   root: {
//     color: grey[50],
//     backgroundColor: green.A700,
//     '&:hover': {
//       backgroundColor: green.A700,
//     },
//   },
// }))(Button);

// const useStyles = makeStyles(theme => ({

//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//     marginLeft: theme.spacing(1),
//     flex: 1,
//     width: 200,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     height: 28,
//     margin: 4,
//   },
// }));

export default function AlertDialog() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const classes = useStyles();
  return (
    <div>


      {/* <Button className="d-none" id='show' variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className="mb-0 primary-blue" >¡Oh, algo está faltando! </p>
          <p className="muted font-9 font-w-300" ></p>

        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong><LocationCityIcon className="muted" /> Ciudad</strong>, <strong> <FastfoodIcon className="muted" /> Marca</strong> y <strong>
              <LocationOnIcon className="muted" />Ubicación</strong> son campos requeridos al realizar una busqueda.
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <ButtonOk onClick={handleClose} variant="contained" color="secondary" className={classes.button}>
            Aceptar
          </ButtonOk>
        </DialogActions>
      </Dialog> */}


    </div>
  );
}
