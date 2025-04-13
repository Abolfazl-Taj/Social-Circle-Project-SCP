import { Status } from "../../../Assets/Data/Status_Data";

export interface person {
  id: string;
  Full_Name: string;
  Brith_Day: string;
  Description: string;
  Status: Status;
}

const Person = ({ id, Full_Name, Brith_Day, Description, Status }: person) => {
  return (
    <div
      className="w-1/2 bg-gradient-to-br from-slate-400 to-slate-500 px-2 py-8 mx-4 rounded-xl shadow flex flex-col justify-center items-center"
      key={id}
    >
      {/* Heading with Playfair Display font */}
      <h1 className="w-full flex items-center font-serif my-4 py-1 px-4 text-xl border-b justify-start text-slate-800 shadow border-slate-400">
        <span>Name:</span>
        <span className="ml-2">{Full_Name}</span>
      </h1>

      <div className="px-2 w-full my-3 font-medium">
        <div className="px-2 py-3 flex w-full flex-col space-y-3 bg-slate-900 rounded-2xl shadow shadow-[#111] gap-0.5">
          {/* Birthday with Playfair Display font */}
          <h2 className="w-full flex items-center justify-between border-b py-2 px-1 border-slate-950">
            <span>Brith Day :</span>
            <span className="text-slate-100 font-medium">
              {new Date().getFullYear() - Number(Brith_Day)} ({Brith_Day})
            </span>
          </h2>

          {/* Description with Inter font */}
          <p className="w-full flex flex-col justify-start items-start border-b py-2 px-1 border-slate-950">
            <span>Description:</span>
            <p className="leading-9 text-justify text-slate-100 font-medium font-sans">
              {Description}
            </p>
          </p>

          {/* Status with Inter font */}
          <span className="w-full flex items-center border-b py-2 px-1 border-slate-950">
            <span>Status:</span>
            <span className="text-slate-100 ml-2 font-medium font-sans">
              {Status.text}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Person;
