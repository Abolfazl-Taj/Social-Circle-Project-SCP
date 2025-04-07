import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Bounce, ToastContainer } from 'react-toastify';
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router'
createRoot(document.getElementById('root')!).render(
  <Router>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
