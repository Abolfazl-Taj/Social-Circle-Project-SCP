import { memo, ReactNode, useState } from "react"
import SideBar from "../Parts/SideBar/SideBar"
import { motion } from "framer-motion";

const Continer = memo(({ children, className = "" }: {
    children?: ReactNode,
    className?: string
}) => {
    const [isOpen, setIsopen] = useState(true)
    return (
        <div className={`${className} font-sans `}>
            <div className="flex justify-between"
            >
                <SideBar isOpen={isOpen} setIsopen={setIsopen} />
                <div className="w-5/6 mx-auto py-3 ">
                    <motion.div className="w-[1200px] mx-auto px-6 py-2 text-gray-400"
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 200,
                            }}
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
)
export default Continer