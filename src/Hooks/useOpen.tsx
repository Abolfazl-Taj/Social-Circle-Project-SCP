import { useContext } from "react"
import OpenContextStatus from "../Context/OpenStatusContext"
// Custom hook to use the context
const useOpen = () => {
    const context = useContext(OpenContextStatus)
    if (!context) {
        throw new Error("useOpen must be used within an OpenProvider")
    }
    return context
}

export default useOpen
