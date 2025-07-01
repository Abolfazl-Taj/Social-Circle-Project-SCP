import Continer from "../../Components/Custom/Continer"
import usePeople from "../../Hooks/usePeople"
import personType from "../../Types/Person"
const Traits = () => {
    const { people } = usePeople()
    return (
        <Continer>
            <div className="w-full flex flex-col justify-evenly md:flex-row flex-wrap gap-6 my-6 font-bold border border-slate-500/40 px-6 py-10 rounded-xl shadow shadow-slate-950  ">
                {people.map((person: personType) => {
                    return <div key={person.id} className=" hover:ring ring-red-700  bg-zinc-950 w-full p-4 rounded-md flex flex-col hover:scale-[1.009] transition-all duration-700 ease-in-out">
                        <h1 className="text-white mb-2 text-xl font-semibold border-b border-slate-700 pb-1">{person.Full_Name} traists</h1>
                        <div className=" flex gap-4 flex-wrap justify-around items-center  p-4 rounded bg-[#111] h-full">
                            {person.traits?.map((t, i) => {
                                return <div className="flex justify-around gap-1 bg-[#000] text-blue-200  px-2 py-1 rounded border border-slate-950/40 shadow-2xl hover:bg-slate-950 transition-all ease-in-out items-center text-justify" key={t}><span className="border-r px-1 text-md self-start">#{i+1}</span><span className="text-sm self-end">{t}</span></div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </Continer>
    )
}

export default Traits