import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom'
import ScrollTop from './components/ScrollTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <ScrollTop />
    <App />
    </Router>
  </StrictMode>
)
