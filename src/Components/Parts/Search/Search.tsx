import { PiFileMagnifyingGlass } from "react-icons/pi"
import { usePeople } from "../../../Hooks/usePeople"

const Search
    = ({ setFilteredPeople }) => {
        const { people } = usePeople()
        const SearchHandler = (e) => {
            const { value } = e.target;
            console.log(value);
            setFilteredPeople(
                people.filter(person =>
                    person.Full_Name.toLowerCase().includes(value.toLowerCase()) || person.Brith_Day.includes(value) || person.personality.text.toLowerCase().includes(value.toLowerCase()) || person.Status.text.toLowerCase().includes(value.toLowerCase()) || person.Description.toLowerCase().includes(value.toLowerCase()) || person.traits.includes(value.toLowerCase())
                )
            );
        };

        return (
            <div className="w-full  mb-4 flex justify-between items-center bg-gradient-to-l from-zinc-900 via-zinc-900 to-zinc-800 shadow-2xl focus-within:ring-2 focus-within:ring-zinc-900 py-2 px-4 rounded-full border border-zinc-700 focus:border-none">
                <input onChange={SearchHandler} className="flex-grow outline-none" type="text" placeholder="Search To Find Your Right Person" />
                <i className="text-slate-100 text-2xl border-l border-zinc-500 px-1  "><PiFileMagnifyingGlass /></i>
            </div>
        )
    }

export default Search
