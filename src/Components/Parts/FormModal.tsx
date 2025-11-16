import { ChangeEvent, useRef, useState } from "react"
import personType from "../../Types/Person"
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import axios from "axios";
import { GiTrashCan } from "react-icons/gi";

const FormModal = ({ text, data }: {
    text: string
    data: personType
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [curplans, setCurplans] = useState<string[]>(data.next ?? [])
    const planInput = useRef<HTMLInputElement | null>(null)
    const [error, setError] = useState<string>("")
    const addPlanHandler = () => {
        if (planInput.current && !error) {
            const value = planInput.current.value.trim()
            if (value.length <= 0) setError("Your next plan cannot be empty")
            else {
                setCurplans([...curplans, value])
                setError("")
                planInput.current.value = ""
            }
        }
    }

    const updateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!error && curplans && curplans.length > 0) {
            axios.patch(`http://localhost:3000/person/${data.id}`, { next: curplans })
        }
    }


    const removePlansHandler = (name: string) => {
        setCurplans(curplans.filter(plan => name !== plan))
    }

    const validationHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (value.trim().length < 10) {
            setError("There must be at least 10 characters")
        } else {
            setError("")
        }
    }

    return (
        isOpen ? (
            <div
                className="absolute w-full z-[99] h-full bg-[#111]/20 backdrop-blur-md top-0 left-0 flex justify-center items-center ">
                <motion.div
                    className="w-full h-full md:w-[50%] md:h-[85%] bg-gradient-to-b from-[#111] via-[#000] to-red-950/40 p-8 flex flex-col rounded-md backdrop-blur-3xl gap-4"

                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        type: "tween",
                        stiffness: 200,
                    }}
                >
                    <div className="w-full flex justify-between items-center gap-4">
                        <h1 className="text-xl font-semibold text-white">{data.Full_Name}</h1>
                        <button onClick={() => setIsOpen(false)} className="text-2xl text-red-700"><FaXmark /></button>
                    </div>
                    <p className="bg-[#111] p-4  text-white leading-10 rounded-xl font-medium text-justify">{data.Description}</p>
                    <div className="bg-[#111] p-6 rounded-md shadow-2xl w-full max-w-xl mx-auto flex flex-col gap-6">
                        <h5 className="font-bold text-xl text-white text-center">
                            {!data.next ? "You haven’t added a plan yet — start now 💡" : "Here are your plans , you can add more"}
                        </h5>

                        <input
                            className="w-full bg-transparent text-white border-b-2 border-red-700 focus:border-red-500 outline-none px-3 py-2 transition-all duration-200"
                            type="text"
                            ref={planInput}
                            onKeyDown={(e) => e.key === "Enter" && addPlanHandler()}
                            placeholder="Type your plan here..."
                            onChange={validationHandler}
                        />
                        {error && <p className="text-red-700 font-semibold text-xs">{error}</p>}
                        <div className="flex justify-end gap-4">
                            <button onClick={addPlanHandler} className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-xl transition duration-200 shadow-md">
                                Add
                            </button>
                            <button className="border border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition duration-200">
                                Cancel
                            </button>
                        </div>
                        <div className="self-center w-full max-h-[250px] overflow-y-auto overflow-x-hidden">
                            {curplans.map((plan, i) => <div className="flex my-1 gap-4 items-center bg-zinc-950 border border-zinc-900 px-4 py-3 w-full rounded-lg relative hover:shadow-2xl hover:scale-105"> <span className="text-white bg-red-950 px-4 py-1 rounded shadow-2xl">#{i + 1}</span> <span className="text-white font-semibold">{plan}</span> <span onClick={() => removePlansHandler(plan)} className="absolute bottom-3 right-2 text-2xl text-red-700"><GiTrashCan /></span></div>)}
                        </div>
                        <button  type="button" onClick={updateHandler} className="bg-green-600 w-[40%] self-center py-2 px-4 rounded-md text-white hover:bg-green-700 transition-all duration-200 ease-in-out">Submit</button>
                    </div>
                </motion.div >
            </div >
        ) : (
            <button className="bg-red-700 hover:bg-[#111] transition-all duration-300 text-white px-6 py-2 rounded font-bold shadow-md self-center" onClick={() => setIsOpen(true)}>{text}</button>
        )
    )
}

export default FormModal
