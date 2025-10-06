import { StrictMode } from 'react'
import { createRoot, type Container } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root') as Container).render(
  <StrictMode>
    <App />
  </StrictMode>
)
