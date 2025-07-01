import { Link, NavLink } from "react-router"
import SideBar_Data from "../../../Assets/Data/SideBar_Data"
import { RiCloseLargeLine, RiMenu2Fill } from "react-icons/ri"
import { memo } from "react"
import useOpen from "../../../Hooks/useOpen"

const SideBar = memo(() => {
    const { isOpen, setIsOpen } = useOpen()
    // document.addEventListener("scroll", () => {
    //     console.log( window.scrollY ,window.pageYOffset)
    // })
    return (
        <>
            <div
                className={`py-6 relative h-screen bg-gradient-to-b from-[#000]/40 to-[#111]/80 hidden lg:block
                ${isOpen ?
                        "w-[350px] opacity-100 translate-x-0 scale-100 shadow-2xl rounded-[8px]" :
                        "w-[100px] opacity-90 translate-x-8 scale-90 rounded-full shadow-2xl border border-slate-950/90 "
                    } 
                transition-[width,opacity,transform,box-shadow] duration-500 ease-out`}
            >
                {/* Toggle buttons for open/close */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`my-2 text-white cursor-pointer z-10 text-2xl w-full flex  ${isOpen ? "justify-start px-4" : "justify-center"}   `}
                >
                    {isOpen ? <RiCloseLargeLine /> : <RiMenu2Fill className="text-red-500 bg-[#111] " />}
                </button>


                {/* Sidebar Links */}
                <ul className="my-5">
                    {SideBar_Data.map((Item) => (
                        <li key={Item.id}>
                            <NavLink
                                to={Item.path}
                                className={`flex items-center w-full text-gray-400 my-3 group relative hover:bg-[#000] hover:text-white  py-2
                            ${isOpen ? "justify-start px-4 " : "justify-center items-center rounded-full w-full"}`}
                            >
                                {/* Icon with hover and transition */}
                                <i className={`text-2xl ${isOpen ? "text-3xl" : ""} 
                            transform transition-transform duration-300 ease-in-out text-red-700
                            group-hover:scale-110 group-hover:text-white`}>
                                    <Item.icon />
                                </i>

                                {/* Text (only visible when sidebar is open) */}
                                {isOpen ? (
                                    <p className={`ml-2 overflow-hidden  `}>
                                        {Item.text}
                                    </p>
                                ) : (
                                <p className={`absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-[9rem] w-[190px]  bg-gradient-to-r from-[#000]  to-[#450000] shadow-2xl border border-red-950 text-center rounded-full px-4 py-2 text-white font-bold transition-all ease-in-out duration-500`}>
                                        {Item.text}
                                    </p>
                                )}

                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>



            <div className="w-[95%] fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full  bg-zinc-950/40 backdrop-blur-sm px-4 py-2  inset-shadow shadow shadow-blue-950  lg:hidden z-[99] border border-slate-950 ">
                <div className="flex gap-2 items-center justify-around                
                    ">
                    {SideBar_Data.map(i => (
                        <Link key={i.id} to={i.path} className="flex flex-col justify-center items-center gap-1 mx-[1px] group">
                            <i.icon className="text-xl text-slate-200" ></i.icon>
                        </Link>
                    ))}
                </div>
            </div>
        </>



    )
})

export default SideBar
