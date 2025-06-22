import { lazy } from 'react'

const Home = lazy(() => import("../Pages/Home/Home"))
const AddPerson = lazy(() => import("../Pages/AddPerson/AddPerson"))
const EditPerson = lazy(() => import("../Pages/EditPerson/EditPerson"))
const News = lazy(() => import("../Pages/News/News"))


const Routes = [
    { element: <Home />, path: "/" },
    { element: <AddPerson />, path: "/add-person" },
    { element: <News />, path: "/news" },
    { element: <EditPerson />, path: "/edit-person/:id" },

]
export default Routes