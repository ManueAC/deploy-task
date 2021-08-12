import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,
} from "./shared/constants/environment-constants";

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
// const domain
console.log(domain, clientid);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev--awjecdv.us.auth0.com"
      clientId="VjauOM0zdsHUpNvWziKOuPDyXM7PsxSx"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
