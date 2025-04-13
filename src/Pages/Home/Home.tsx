import { useEffect, useState } from "react";
import Continer from "../../Components/Custom/Continer";
import axios from "axios";
import Person, { person } from "../../Components/Parts/Person/Person";

const Home = () => {
  const [persons, setpersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/person").then((res) => {
      setpersons(res.data);
    });
  });
  return (
    <Continer>
      <div className="my-4 font-bold bg-slate-800 px-5 py-12 rounded shadow flex items-center">
        {persons.map((person: person) => (
          <Person {...person} />
        ))}
      </div>
    </Continer>
  );
};

export default Home;
