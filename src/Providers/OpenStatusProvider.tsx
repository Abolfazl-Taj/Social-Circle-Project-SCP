import { useState, useEffect, ReactNode } from "react";
import OpenContextStatus from "../Context/OpenStatusContext";
const OpenProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(() => {
        const status = localStorage.getItem("SideBarOpen")
        return status === "true"  
    })

    useEffect(() => {
        localStorage.setItem("SideBarOpen", String(isOpen))
    }, [isOpen])

    return (
        <OpenContextStatus.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </OpenContextStatus.Provider>
    )
}
export default OpenProvider