import Continer from "../../Components/Custom/Continer"
import FormModal from "../../Components/Parts/FormModal";
import usePeople from "../../Hooks/usePeople"
import personType from "../../Types/Person";

const Next = () => {
    const { people } = usePeople()
    console.log(people);

    return (
        <Continer>
            <div className="p-4 flex-1 ring ring-zinc-950 shadow-xl rounded-md flex flex-col gap-8 ">
                <h1 className="text-white text-semibold text-xl md:text-2xl border-b border-zinc-500 pb-2 mt-2 px-2 w-full md:w-2/3">What the fuck i should do next</h1>
                <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-8 p-4">
                    {people.map((person: personType) => {
                        return person?.next && person.next.length > 0 ? (
                            <div key={person.id} className="w-full md:w-[40%] p-4 gap-4 flex flex-col bg-zinc-950 rounded-md shadow">
                                <div className="flex justify-between gap-4 items-center border-b border-red-700 py-1">
                                    <h2 className="text-[17px] text-white font-semibold">{person.Full_Name}</h2>
                                    <span className="text-sm text-white">Plans: <span className="text-red-700 font-bold"> {person.next.length}</span></span>
                                </div>
                                <p className="w-full text-white font-[500] text-justify line-clamp-3">{person.Description}</p>
                                <div className="flex w-full gap-2">
                                    {person.next.map(((plan, i) => <div key={plan} className="flex flex-col w-1/2 justify-center items-center bg-[#111] px-2 py-1 rounded-md shadow-2xl gap-1">
                                        <span className="text-red-700">#{i + 1}</span>
                                        <h4 className="w-full text-xs text-center font-bold text-white">{plan}</h4>
                                    </div>))}
                                </div>
                                <FormModal data={person} text="Add More"  />
                            </div>
                        ) : (
                            <div key={person.id} className="bg-gradient-to-l from-[#000] to-[#111] p-6 rounded-2xl shadow-xl flex flex-col gap-5">
                                <h2 className="bg-red-700 border-[#000] text-2xl font-semibold text-[#f1f1f1] border  px-5 py-3 rounded-lg w-fit shadow-sm">
                                    {person?.Full_Name}
                                </h2>
                                <p className="text-white bg-[#000] px-5 py-3 rounded-lg text-justify leading-relaxed shadow-inner">
                                    You haven't provided any plans for your next move with this person.
                                </p>
                                <FormModal text="Click here to add your next move" data={person} />
                            </div>
                        )
                    })}

                </div>

            </div>
        </Continer >
    )
}

export default Next