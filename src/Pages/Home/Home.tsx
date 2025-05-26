import Continer from "../../Components/Custom/Continer";
import Person, { person } from "../../Components/Parts/Person/Person";
import Nodatapic from '../../Assets/Img/Nodata.png'
import { Link } from "react-router";
import { usePeople } from "../../Context/PeopleContext";
import Search from "../../Components/Parts/Search/Search";
import { useEffect, useState } from "react";
const Home = () => {
  const { people } = usePeople()
  const [filteredPeople, setFilteredPeople] = useState([])
  useEffect(() => {
    setFilteredPeople(people);
  }, [people]);
  return (
    <Continer>
      <div className="my-4 font-bold bg-slate-800/40 border border-slate-950/40 px-5 py-10 rounded shadow flex flex-col w-full min-h-[400px] animate-in fade-in zoom-in">
        <Search setFilteredPeople={setFilteredPeople} />
        <div className="grid gap-x-4 gap-y-6 grid-cols-3 my-2">
          {filteredPeople.length > 0 ? (
            filteredPeople.map((person: person) => (
              <Person key={person.id} {...person} />
            ))
          ) : (
            <div className="w-full flex flex-col items-center justify-center col-span-3 gap-3">
              <img className="object-contain" src={Nodatapic} alt="No data available" />
              <h4 className="font-black text-xl my-1 text-justify leading-relaxed">
                No Data About Person  Found. Please Go To The
                <Link
                  to="/add-person"
                  className="text-red-900 bg-red-500 px-4 rounded-full mx-2 hover:bg-red-600 transition-colors"
                >
                  Add Person Route
                </Link>
                And Add New People.
              </h4>
              <Link className="bg-blue-700 hover:bg-blue-800 transition-colors py-3 px-6 rounded text-white font-bold my-2 shadow"
                to={'/add-person'}>Add New Person</Link>
            </div>
          )}
        </div>


      </div>
    </Continer>
  );
};

export default Home;
