import './App.css'
import { useRoutes } from 'react-router'
import { default as path } from './Assets/Routes'

import "react-toastify/dist/ReactToastify.css";
import { Suspense } from 'react';
import Loading from './Components/Parts/Loading';
function App() {
  const Routes = useRoutes(path)
  return (
    <>
      <Suspense
        fallback={<Loading />}

      >
        {Routes}
      </Suspense>
    </>
  )
}

export default App
