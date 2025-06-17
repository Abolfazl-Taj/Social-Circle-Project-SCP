import React, { createContext } from "react"
import personType from "../Types/Person"

type PeopleContextType = {
    people: personType[],
    setPeople: React.Dispatch<React.SetStateAction<personType[]>>
}

const PeopleContext = createContext<PeopleContextType>({
    people: [],
    setPeople: () => { }
})
export default PeopleContext