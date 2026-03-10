import '../tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './pages/components/header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />

  </StrictMode>,
)
