import { GiEvilLove, GiDevilMask, GiMuscularTorso } from "react-icons/gi";
import { MdOutlineHandshake } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { JSX } from "react";
import { Link } from "react-router";
import { FiEdit } from "react-icons/fi";
import personType from "../../../Types/Person";


const statusIconMap: Record<string, JSX.Element> = {
  "Student Mate": <PiStudentFill className="text-yellow-400 text-3xl transition-all hover:scale-125 hover:text-yellow-500" />,
  "Friend": <GiMuscularTorso className="text-green-500 text-3xl transition-all hover:scale-125 hover:text-green-600" />,
  "Co Worker": <MdOutlineHandshake className="text-blue-400 text-3xl transition-all hover:scale-125 hover:text-blue-500" />,
  "Enemy": <GiDevilMask className="text-red-600 text-3xl transition-all hover:scale-125 hover:text-red-700" />,
  "Girl Friend": <GiEvilLove className="text-pink-500 text-3xl transition-all hover:scale-125 hover:text-pink-600" />,
  "Game Mate": <IoGameControllerOutline className="text-purple-400 text-3xl transition-all hover:scale-125 hover:text-purple-500" />,
};

const Person = ({ id, Full_Name, Brith_Day, Description, Status, personality, traits }: personType) => {
  const Icon = statusIconMap[Status.text] ?? null;

  return (
    <div className="bg-slate-800/70 border border-slate-600 rounded-2xl p-6 shadow-lg transition-transform hover:shadow-blue-900 hover:scale-[1.02] duration-300 
    w-full md:w-1/2 lg:w-1/3 xl:w-[38%] flex flex-col gap-y-4 animate-in fade-in zoom-in
    
    ">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-extrabold text-2xl border-b border-slate-600 pb-2">
          {Full_Name}
        </h2>
        <div className="text-lg text-slate-300">{Brith_Day} Years Old</div>

      </div>

      <section className="mt-4">
        <h4 className="text-[#f1f1f1] font-semibold text-lg mb-1">About This Person:</h4>
        <p className="text-slate-300 leading-relaxed tracking-wide text-justify">{Description}</p>
      </section>

      <section className="mt-4 bg-blue-700/30 rounded-xl py-2 px-4 text-center text-blue-300 font-semibold shadow-inner">
        <p>This person Born in <span className="text-white">{new Date().getFullYear() - Number(Brith_Day)}</span> </p>
      </section>

      <section className="mt-4">
        <h4 className="text-white font-semibold mb-1">My Status With This Person</h4>
        <div className="flex items-center gap-3 bg-slate-700/40 rounded-md px-3 py-2 transition-all hover:bg-slate-600">
          {Icon}
          <span className="text-slate-100 font-medium">{Status.text}</span>
        </div>
      </section>

      <section className="flex flex-col items-center my-1">
        <h1 className="border-b py-1 text-white border-blue-700 w-full text-center my-1">Personality Attributes</h1>
        <section className="my-1 w-full flex flex-col items-start gap-y-1">
          <h4>Energy</h4>
          <div className="flex items-center my-1">
            <img className="w-8 mx-1 object-contain" src={personality?.icon} alt="energy icon" />
            <span className="bg-blue-700/40 py-[2px] px-4 rounded-full text-white font-bold">
              {personality?.text || "Not Defined"}
            </span>
          </div>
          <h4>Traits</h4>
          <ul className="flex flex-wrap gap-2 mt-2">
            {traits?.map(trait => (
              <li
                className="bg-slate-700 text-white font-medium px-4 py-1 rounded-full shadow border border-blue-800/30 hover:border-blue-500/60 hover:shadow-blue-500/20 transition-all duration-200 cursor-default"
                key={trait}
              >{trait}</li>
            ))}
          </ul>
        </section>
      </section>
      <Link className="flex items-center gap-x-2 bg-slate-700 transition-all ease-in-out hover:bg-slate-800 shadow-2xl my-2 text-white font-bold  py-2 px-4 rounded-2xl" to={`edit-person/${id}`}>
        <span>Edit {Full_Name}</span>
        <i className="text-[18px]"><FiEdit /></i>
      </Link>
    </div>
  );
};

export default Person;
