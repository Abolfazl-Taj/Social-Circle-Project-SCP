import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import PeopleContext from "../Context/PeopleContext";
import personType from "../Types/Person";

const PeopleContextProvider = ({ children }: {
    children: ReactNode
}) => {
    const [people, setPeople] = useState<personType[]>([])
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
export default PeopleContextProvider    