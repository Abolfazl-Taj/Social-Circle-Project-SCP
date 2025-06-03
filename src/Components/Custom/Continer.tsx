import { memo, ReactNode } from "react"
import SideBar from "../Parts/SideBar/SideBar"
import { motion } from "framer-motion";
import useOpen from "../../Context/UseOpen";

const Continer = memo(({ children, className = "" }: {
    children?: ReactNode,
    className?: string
}) => {
    const { isOpen } = useOpen()
    return (
        <div className={`${className} font-['Inter'] `}>
            <div className="flex justify-between "
            >
                <SideBar />
                <div className="w-5/6 mx-auto py-3  ">
                    <motion.div className={`w-full  mx-auto p-4 text-gray-400 ${!isOpen ? "lg:w-[85%]" : "lg:w-[1200px]"}`}
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