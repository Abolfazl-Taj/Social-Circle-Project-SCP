import './App.css'
import { useRoutes } from 'react-router'
import { default as path } from './Assets/Routes'

import "react-toastify/dist/ReactToastify.css";
function App() {
  const Routes = useRoutes(path)
  return (
    <>
    
      {Routes}
    </>
  )
}

export default App
