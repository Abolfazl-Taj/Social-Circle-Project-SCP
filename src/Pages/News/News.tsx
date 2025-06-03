import Continer from "../../Components/Custom/Continer"
import { usePeople } from "../../Context/PeopleContext"

const News = () => {
    const { people } = usePeople()
    console.log(people);
    return (
        <Continer>
            <div className=" font-['Inter'] w-full flex flex-col md:flex-row gap-4 my-4 font-bold bg-slate-800/40 border border-slate-950/40 px-5 py-10 rounded shadow  min-h-[400px] animate-in fade-in zoom-in">
                {people.map(p => {
                    return <div key={p.id} className="w-full md:w-1/2 rounded-md shadow-xl p-4 ring ring-slate-900 bg-slate-900">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl shadow-sm w-fit">
                            <span className="text-lg font-semibold text-white">{p.Full_Name}</span>
                        </div>

                        <div className="flex flex-col mt-4 p-4 rounded-md gap-8">
                            {p.news?.map(n => (
                                <div className="flex flex-col gap-4 shadow rounded-md" key={n.id}>
                                    <div className="flex justify-between items-center">
                                        <span className="p-2 rounded-md bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold shadow-sm">#{n.id}</span>
                                        <span className="text-xs bg-slate-950 p-2 rounded-md text-gray-300">{n.date}</span>
                                    </div>
                                    <p className="p-2 text-justify bg-slate-800 rounded-md shadow text-gray-300">
                                        {n.news}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                })}
            </div>
        </Continer>
    )
}

export default News