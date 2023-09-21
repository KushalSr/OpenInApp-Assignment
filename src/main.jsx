import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/styles/app.css'
import '../src/index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Auth0Provider
    domain='dev-45mfq0x6kfdn8ijl.us.auth0.com'
    clientId='ylydbG0H4BuheltFev9djQw32b8VdkTz'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
    </Auth0Provider>

  </React.StrictMode>,
)



