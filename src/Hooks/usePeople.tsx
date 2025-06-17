import { useContext } from "react"
import PeopleContext from "../Context/PeopleContext"


export const usePeople = () => {
    return useContext(PeopleContext)
}
export default usePeople