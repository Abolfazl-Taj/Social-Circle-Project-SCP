import { useEffect, useState } from "react";
import Continer from "../../Components/Custom/Continer";
import axios from "axios";
import { Status } from "../../Assets/Data/Status_Data";

const Home = () => {
  const [persons, setpersons] = useState([]);
  interface person {
    id: string;
    Full_Name: string;
    Brith_Day: string;
    Description: string;
    Status: Status;
  }
  useEffect(() => {
    axios.get("http://localhost:3000/person").then((res) => {
      setpersons(res.data);
    });
  });
  return (
    <Continer>
      <div className="my-4 font-bold bg-slate-800 px-5 py-12 rounded shadow flex items-center">
        {persons &&
          persons.map((person: person) => (
            <div
              className="w-1/3 bg-gradient-to-tl from-slate-600 to-slate-800 px-4 py-12 mx-4 rounded-xl shadow"
              key={person.id}
            >
              {person.Full_Name}
              {new Date().getFullYear() - Number(person.Brith_Day)}
              {person.Description}
              {person.Status.text}
            </div>
          ))}
      </div>
    </Continer>
  );
};

export default Home;
