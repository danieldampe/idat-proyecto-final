import { StrictMode } from 'react'
import { createRoot, type Container } from 'react-dom/client'
import './index.css'
import { HashRouter as Router } from 'react-router'
import App from './App'

createRoot(document.getElementById('root') as Container).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
