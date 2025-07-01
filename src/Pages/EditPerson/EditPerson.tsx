import { useNavigate, useParams } from "react-router"
import Continer from "../../Components/Custom/Continer"
import { usePeople } from "../../Hooks/usePeople"
import { useActionState, useEffect, useRef, useState } from "react"
import DropDown from "../../Components/Custom/DropDown"
import Status_Data from "../../Assets/Data/Status_Data"
import Personality_Data from "../../Assets/Data/Personality_Data"
import axios from "axios"

const EditPerson = () => {
    const id = useParams().id
    const [editedPerson, SetEditedPerson] = useState()
    const { people } = usePeople()
    const nav = useNavigate()
    const inputref = useRef<HTMLInputElement>()
    const [isadding, setIsadding] = useState<boolean>(false)
    const [state, formaction, isPending] = useActionState((prevdata: object | null,
        formData: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
        console.log(formData);
        const { target } = formData || {};
        const { name, value } = target || {};
        if (name === undefined && value === undefined) {
            return formData
        } else {
            return {
                ...prevdata,
                [name]: value
            }
        }
    })

    useEffect(() => {
        const person = people.find(person => person.id == id)
        if (person) {
            SetEditedPerson({
                Full_Name: person.Full_Name,
                Brith_Day: person.Brith_Day,
                Description: person.Description,
                Status: person.Status,
                personality: person.personality,
                traits: person.traits
            })
        }
    }, [id, people])
    const AddMoreTraits = () => {
        SetEditedPerson({
            ...editedPerson,
            traits: [...editedPerson.traits, inputref.current.value]
        })
        // formaction(editedPerson)
    }
    const removeTraits = (trait: string) => {
        SetEditedPerson({
            ...editedPerson,
            traits: editedPerson?.traits?.filter(t => t !== trait)
        })
        // formaction(editedPerson)
    }
    const editPerson = () => {
        axios.patch(`http://localhost:3000/person/${id}`, state).then(() => nav("/"))
    }
    useEffect(() => {
        formaction(editedPerson)
    }, [editedPerson])
    return (
        <Continer>
            <div className="max-w-2xl mx-auto bg-zinc-950 rounded-xl shadow-xl overflow-hidden p-8 space-y-6 border border-zinc-700 font-['Inter']">
                <h1 className="text-3xl font-bold text-center text-slate-100 mb-8">Edit Profile</h1>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Full Name</label>
                        <input
                            onChange={formaction}
                            name="Full_Name"
                            type="text"
                            placeholder={editedPerson?.Full_Name}
                            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-600 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Birth Day</label>
                        <input
                            onChange={formaction}
                            name="Brith_Day"
                            type="text"
                            placeholder={editedPerson?.Brith_Day}
                            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-600 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Description</label>
                        <textarea
                            onChange={formaction}
                            name="Description"
                            placeholder={editedPerson?.Description}
                            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-600 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <DropDown
                            data={Status_Data}
                            name="Status"
                            lablelText="Please Select New Status"
                            formAction={formaction}
                            key={"Status"}
                        />
                    </div>

                    <div className="space-y-2">
                        <DropDown
                            data={Personality_Data}
                            name="personality"
                            lablelText="Please Select New Personality"
                            formAction={formaction}
                            key={"Personality"}
                        />
                    </div>
                    <div className="bg-zinc-900/40 px-3 py-6 my-2 rounded-lg border zinc-slate-600 w-full flex flex-wrap gap-x-4 gap-y-5">
                        {editedPerson?.traits?.map((trait) => (
                            <span
                                className="bg-zinc-500/40 border border-slate-700 hover:bg-zinc-500 transition-all ease-in-out text-white px-3 rounded-full py-2"
                                key={trait}
                                onClick={() => removeTraits(trait)}
                            >
                                {trait}
                            </span>
                        ))}
                    </div>
                    {isadding ? (
                        <div className="w-full flex flex-col my-4 bg-gradient-to-r from-zinc-900 via-zinc-900/10 to-zinc-800/40 px-4 py-2 rounded-2xl shadow">
                            <label htmlFor="trait" className="my-2 text-lg font-bold border-b py-2 text-white border-slate-600">Add New Trait</label>
                            <input ref={inputref} placeholder="ex : Football player , angery , ext" id="trait" type="text" name="traits" className="my-4 bg-zinc-700 rounded-lg border border-slate-600 px-6 outline-none focus:border-blue-500 py-3  w-full" />
                            <div className="w-full flex justify-around items-center my-2 font-bold py-2 px-4" >
                                <button onClick={AddMoreTraits} className="py-2 px-4 shadow-md rounded-lg bg-green-500 text-white w-[140px]">Add</button>
                                <button onClick={() => setIsadding(false)} className="py-2 px-4 shadow-md rounded-lg bg-red-500 text-white w-[140px]">Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="px-4 py-2 bg-red-600 hover:bg-red-800 transition-all ease-in-out font-bold text-white rounded-lg mx-2"
                            onClick={() => setIsadding(true)}>Add More</button>
                    )}

                </div>
                <button
                    type="button"
                    className="w-full bg-zinc-600 hover:bg-zinc-500 text-white py-3 px-4 rounded-lg font-medium shadow hover:shadow-lg transition-all duration-300 border border-zinc-500 hover:border-zinc-400"
                    disabled={isPending}
                    onClick={editPerson}
                >
                    {isPending ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Saving...
                        </span>
                    ) : "Save Changes"}
                </button>
            </div>
        </Continer >
    )
}

export default EditPerson