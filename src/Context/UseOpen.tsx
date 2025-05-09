import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react"

// Define the context type
type OpenContextType = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Create context with the correct type or null initially
const OpenContext = createContext<OpenContextType | null>(null)

export const OpenProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(() => {
        const status = localStorage.getItem("SideBarOpen")
        return status === "true"  // Directly return true/false based on comparison
    })

    useEffect(() => {
        localStorage.setItem("SideBarOpen", String(isOpen))
    }, [isOpen])

    return (
        <OpenContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </OpenContext.Provider>
    )
}

// Custom hook to use the context
const useOpen = () => {
    const context = useContext(OpenContext)
    if (!context) {
        throw new Error("useOpen must be used within an OpenProvider")
    }
    return context
}

export default useOpen
