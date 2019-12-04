import React from "react";

import "./styles/load.css";

class LoadingBlack extends React.Component {
  render() {
    return (
      <div className="load-content-black">
        <div className="lds-grid-white">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
    );
  }
}

export default LoadingBlack;