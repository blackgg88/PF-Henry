import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";

import { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID } from "../config";

const domain = REACT_APP_AUTH0_DOMAIN;
const clientId = REACT_APP_AUTH0_CLIENT_ID;

// const domain = "dev-ofbihxhi1ivqz16i.us.auth0.com";
// const clientId = "2rlz5Jb0snWMf4Zj6DsHi4mHeDguREtP";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
