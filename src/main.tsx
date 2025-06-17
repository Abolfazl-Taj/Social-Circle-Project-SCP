import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Bounce, ToastContainer } from 'react-toastify';
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router'
import PeopleContextProvider from './Providers/PeopleProvider.tsx';
import OpenProvider from './Providers/OpenStatusProvider.tsx';
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
    <PeopleContextProvider>
      <OpenProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </OpenProvider>
    </PeopleContextProvider>
  </Router>
)
