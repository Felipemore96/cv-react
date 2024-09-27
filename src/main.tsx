import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './react-components/App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
