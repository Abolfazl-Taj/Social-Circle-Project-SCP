import axios from "axios"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

const PeopleContext = createContext()
const PeopleContextProvider = ({ children }: {
    children: ReactNode
}) => {
    const [people, setPeople] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/person").then((res) => {
            setPeople(res.data);
        });
    }, []);
    return (
        <PeopleContext.Provider value={{ people, setPeople }}>
            {children}
        </PeopleContext.Provider>

    )
}
export const usePeople = () => {
    return useContext(PeopleContext)
}
export default PeopleContextProvider