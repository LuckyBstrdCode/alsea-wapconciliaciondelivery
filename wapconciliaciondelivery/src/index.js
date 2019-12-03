import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import './responsive.css';
// import "./Alsea.css";
// import "./Alsea-sucursales.css";
// import "./Alsea-responsive.css";
// import "./animate.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

import Amplify from "aws-amplify";
import config from "./config.json";

Amplify.configure({
    Auth: {
        mandatorySnngIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
