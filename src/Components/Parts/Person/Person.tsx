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
    <div className="bg-slate-800/70 border border-slate-600 rounded-2xl py-6 px-8 shadow-lg transition-all  hover:scale-[1.02] duration-1000  ease-in-out overflow-x
    w-full md:w-1/2 lg:w-1/3 xl:w-[35%]  flex flex-col gap-y-4 animate-in fade-in zoom-in backdrop-blur-2xl PersonShadow">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-extrabold text-2xl border-b border-slate-600 pb-2 flex-1">
          {Full_Name}
        </h2>
        <Link className="flex text-white font-bold  pb-2 " to={`edit-person/${id}`}>
          <i className="text-[20px]"><FiEdit /></i>
        </Link>
      </div>

      <section className="mt-4">
        <h4 className="text-[#f1f1f1] font-semibold text-lg mb-1">About This Person:</h4>
        <p className="text-slate-300 leading-relaxed tracking-wide text-justify">{Description || "No description has been aded "}</p>
      </section>
      <section className="mt-4">
        <div className="flex items-center justify-around gap-3 bg-slate-700/40 rounded-md px-4 py-2">
          <div className="flex items-center gap-1 flex-1">
            {Icon}
            <span className="text-slate-100 font-medium">{Status.text}</span>
          </div>
          <p className="text-gray-300 text-sm"> <span className="text-blue-500 font-bold text-[20px]">{Brith_Day}</span> years old</p>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <section className="my-1 w-full flex flex-col items-start gap-4">
          <div className="flex items-center">
            <img className="w-8 mx-1 object-contain" src={personality?.icon} alt="energy icon" />
            <span className="bg-blue-700/40 py-[2px] px-4 rounded-full text-white font-bold">
              {personality?.text || "Not Defined"}
            </span>
          </div>
          <ul className="flex flex-wrap gap-4">
            {traits?.map(trait => (
              <li
                className="bg-slate-700 text-white font-medium px-4 py-1 rounded-full shadow border border-blue-800/30 hover:border-blue-500/60 hover:shadow-blue-500/20 transition-all duration-200 cursor-default"
                key={trait}
              >{trait}</li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Person;
