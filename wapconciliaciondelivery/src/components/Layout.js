import React from "react";
import Header from "./Header";

function Layout(props) {
  return (
    <React.Fragment>
      <Header vistaPrevia={props.vistaPrevia} auth={props.auth} />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
