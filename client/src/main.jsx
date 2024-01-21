// !!! Below I import all the needed stuff // 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ---adding BrowserRouter to the list--- //
import {BrowserRouter} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    {/* Addding BrowserRouter needed for App.jsx */}
    
    <App />

    </BrowserRouter>
  </React.StrictMode>,
);
