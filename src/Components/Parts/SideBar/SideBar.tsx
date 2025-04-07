import { NavLink } from "react-router"
import SideBar_Data from "../../../Assets/Data/SideBar_Data"
import { RiCloseLargeLine, RiMenu2Fill } from "react-icons/ri";
import { memo } from "react";

const SideBar = memo(({ isOpen, setIsopen }: {
    isOpen: boolean,
    setIsopen: (value: boolean) => void
}) => {

    return (
        <div className={`py-6 shadow rounded bg-slate-700/20 relative  h-[100vh]  ${isOpen ? "w-[200px]" : "w-[20px]  px-8 flex flex-col"} overflow-hidden transition-all`}>
            <button onClick={() => setIsopen(!isOpen)} className={`text-white ml-4 cursor-pointer ${!isOpen && "hidden"}`}><RiCloseLargeLine /></button>
            <button onClick={() => setIsopen(!isOpen)} className={`absolute top-2 left-1 my-2 justify-start text-blue-500 cursor-pointer ${isOpen && "hidden"}`}><RiMenu2Fill /></button>
            <ul className="my-5">
                {SideBar_Data.map(Item => (
                    <li key={Item.id}>
                        <NavLink to={Item.path} className={`flex items-center w-full  text-gray-400 my-3   ${isOpen ? "justify-start px-4" : "justify-center"}`}>
                            <i className=""><Item.icon /></i>
                            <p className={`ml-2 overflow-hidden ${isOpen ? "" : "hidden"}`}>{Item.text}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default SideBar