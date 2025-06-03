import Home from '../Pages/Home/Home'
import AddPerson from '../Pages/AddPerson/AddPerson'
import EditPerson from '../Pages/EditPerson/EditPerson'
import News from '../Pages/News/News'
const Routes = [
    { element: <Home />, path: "/" },
    { element: <AddPerson />, path: "/add-person" },
    { element: <News />, path: "/news" },
    { element: <EditPerson />, path: "/edit-person/:id" },

]
export default Routes