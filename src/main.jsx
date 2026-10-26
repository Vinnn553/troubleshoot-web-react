import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/Style.css'
import App from './app/App'
import Container from './container/Container'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <App />
    </Container>
  </StrictMode>
)
