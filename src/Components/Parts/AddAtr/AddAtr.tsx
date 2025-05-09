import { PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const AddAtr = ({ formAction }) => {
    const [openAdd, setOpenAdd] = useState(false);
    const [traits, setTraits] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            setTraits([...traits, inputValue.trim()]);
            setInputValue("");
            setOpenAdd(false);
        }
    };

    const handleCancel = () => {
        setInputValue("");
        setOpenAdd(false);
    };
    const deleteTrait = (choosentrait: string) => {
        setTraits(traits.filter(trait => trait !== choosentrait))
    }
    useEffect(() => {
        formAction({
            target: {
                name: "traits",
                value: traits
            }
        })
    }, [traits])
    return (
        <section className="my-6 w-full p-6 bg-slate-900 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-700 pb-3 mb-6">
                Add Some Personality Traits
            </h2>

            {/* List existing traits */}
            {traits.length > 0 && (
                <ul className="mb-6 space-y-2">
                    {traits.map((trait, index) => (
                        <li
                            key={index}
                            className="inline-block bg-slate-700 text-white px-4 py-2 rounded-full text-sm mr-2 mb-2 relative overflow-hidden group"
                        >
                            <span>
                                {trait}
                            </span>
                            <span
                                onClick={() => deleteTrait(trait)}
                                className="w-full z-40 absolute left-0 top-0 bg-slate-700/40 backdrop-blur-[2px] h-full flex justify-center items-center text-[30px] text-red-500
                             opacity-0 group-hover:opacity-100 transition-all duration-[500ms] ease-in-out 
                            
                            "><RiDeleteBin5Fill /></span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Add form */}
            {openAdd && traits.length < 5 ? (
                <section className="flex flex-col items-start gap-4 animate-fadeIn">
                    <input
                        className="w-full bg-slate-800 text-white placeholder-slate-400 py-3 px-6 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        type="text"
                        placeholder="e.g., Funny, Outgoing"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={handleAdd}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
                        >
                            Confirm
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg transition-all"
                        >
                            Cancel
                        </button>
                    </div>
                </section>
            ) : !openAdd && traits.length < 5 ?
                (
                    <button
                        type="button"
                        onClick={() => setOpenAdd(true)}
                        className="group flex items-center gap-2 bg-slate-700 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        <PlusIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
                        Add Trait
                    </button>
                ) : (
                    <span className="text-orange-700 font-bold">You can not add more traists</span>
                )
            }
        </section>
    );
};

export default AddAtr;
