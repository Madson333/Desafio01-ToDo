import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './home'
import "../src/styles/global.css";
import { Header } from './components/header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <Home />
  </React.StrictMode>
)
