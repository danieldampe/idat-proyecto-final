import { StrictMode } from 'react'
import { createRoot, type Container } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Router } from 'wouter'

createRoot(document.getElementById('root') as Container).render(
  <StrictMode>
    <Router base='https://danieldampe.github.io/idat-proyecto-final'>
      <App />
    </Router>
  </StrictMode>
)
