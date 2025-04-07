import { ReactNode, useState } from "react"
import SideBar from "../Parts/SideBar/SideBar"

const Continer = ({ children, className = "" }: {
    children?: ReactNode,
    className?: string
}) => {
    const [isOpen, setIsopen] = useState(true)
    return (
        <div className={`${className} font-sans `}>
            <div className="flex justify-between">
                <SideBar isOpen={isOpen} setIsopen={setIsopen} />
                <div className="w-5/6 mx-auto py-3 ">
                    <div className="w-[1200px] mx-auto px-6 py-2 text-gray-400">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Continer