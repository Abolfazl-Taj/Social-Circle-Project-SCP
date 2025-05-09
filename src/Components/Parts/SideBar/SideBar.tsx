import { NavLink } from "react-router"
import SideBar_Data from "../../../Assets/Data/SideBar_Data"
import { RiCloseLargeLine, RiMenu2Fill } from "react-icons/ri"
import { memo } from "react"
import useOpen from "../../../Context/UseOpen"

const SideBar = memo(() => {
    const { isOpen, setIsOpen } = useOpen()

    return (
<div
  className={`py-6 shadow-lg bg-slate-700/20 relative h-screen 
  ${isOpen ? 
    "w-[350px] opacity-100 translate-x-0 scale-100 shadow-2xl rounded-[8px]" : 
    "w-[80px] opacity-90 translate-x-2 scale-90 rounded-full"
  } 
  transition-[width,opacity,transform,box-shadow] duration-500 ease-out`}
>
            {/* Toggle buttons for open/close */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`my-2 text-white cursor-pointer z-10 text-2xl w-full flex  ${isOpen ? "justify-start px-4" : "justify-center"}   `}
            >
                {isOpen ? <RiCloseLargeLine /> : <RiMenu2Fill className="text-blue-500" />}
            </button>


            {/* Sidebar Links */}
            <ul className="my-5">
                {SideBar_Data.map((Item) => (
                    <li key={Item.id}>
                        <NavLink
                            to={Item.path}
                            className={`flex items-center w-full text-gray-400 my-3 group relative hover:bg-blue-900 hover:text-white  py-2
                            ${isOpen ? "justify-start px-4 " : "justify-center items-center rounded-full w-full"}`}
                        >
                            {/* Icon with hover and transition */}
                            <i className={`text-2xl ${isOpen ? "text-3xl" : ""} 
                            transform transition-transform duration-300 ease-in-out text-blue-500
                            group-hover:scale-110 group-hover:text-white`}>
                                <Item.icon />
                            </i>

                            {/* Text (only visible when sidebar is open) */}
                            {isOpen ? (
                                <p className={`ml-2 overflow-hidden  `}>
                                    {Item.text}
                                </p>
                            ) : (
                                <p className={`absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-[9rem] w-[190px] bg-blue-500 text-center rounded-full px-4 py-2 text-white font-bold transition-all ease-in-out duration-500`}>
                                    {Item.text}
                                </p>
                            )}

                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default SideBar
