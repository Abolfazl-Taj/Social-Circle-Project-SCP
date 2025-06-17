import { createContext, Dispatch, SetStateAction } from "react";

type OpenContextType = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const OpenContextStatus = createContext<OpenContextType | null>(null)

export default OpenContextStatus