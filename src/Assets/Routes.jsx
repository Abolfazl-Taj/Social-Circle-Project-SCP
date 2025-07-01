import { lazy } from 'react'

const Home = lazy(() => import("../Pages/Home/Home"))
const AddPerson = lazy(() => import("../Pages/AddPerson/AddPerson"))
const EditPerson = lazy(() => import("../Pages/EditPerson/EditPerson"))
const News = lazy(() => import("../Pages/News/News"))
const Traits = lazy(() => import('../Pages/Traits/Traits'))
const Next = lazy(() => import('../Pages/Next/Next'))
const Routes = [
    { element: <Home />, path: "/" },
    { element: <AddPerson />, path: "/add-person" },
    { element: <News />, path: "/news" },
    { element: <Traits />, path: "/traits" },
    { element: <Next />, path: "/next" },
    { element: <EditPerson />, path: "/edit-person/:id" },

]
export default Routes