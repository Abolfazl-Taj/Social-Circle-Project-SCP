import { memo, ReactNode } from "react"
import SideBar from "../Parts/SideBar/SideBar"
import { motion } from "framer-motion";
import useOpen from "../../Hooks/useOpen";

const Continer = memo(({ children, className = "" }: {
    children?: ReactNode,
    className?: string
}) => {
    const { isOpen } = useOpen()
    return (
        <div className={`${className} font-['Inter']`}>
            <div className="flex justify-between"
            >
                <SideBar />
                <div className="w-full mx-auto py-0 md:w-4/5 md:flex-1 md:py-3 flex-1">
                    <motion.div className={`flex-1 w-full p-0 mx-0 md:mx-auto md:p-4 text-gray-400 ${!isOpen ? "lg:w-[70%]" : "lg:w-[1200px]"}`}
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