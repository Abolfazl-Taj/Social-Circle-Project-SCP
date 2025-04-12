import { useState } from "react";
import { Status } from "../../Assets/Data/Status_Data";
import { IoTrashBin } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const DropDown = ({
  data,
  formAction,
  name = "status", // optional default name
}: {
  data: Status[];
  formAction: (e: any) => void;
  name?: string;
}) => {
  const [isOpen, setIsopen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

  const SelectHandler = (e: React.MouseEvent<HTMLDivElement>, item: Status) => {
    const mockInput = {
      target: {
        name,
        value: item.icon,
      },
    };
    formAction(mockInput);
    e.stopPropagation();
    setSelectedStatus(item);
    setIsopen(false);
  };

  const clearSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsopen(false);
    setSelectedStatus(null);
  };

  return (
    <div
      onClick={() => setIsopen(!isOpen)}
      className={`my-4 w-full outline-noone border border-slate-700 rounded shadow-2xl overflow-hidden transition-all duration-700 ease-in-out
        ${
          isOpen
            ? "max-h-[600px] px-4 py-6"
            : selectedStatus
            ? "max-h-[140px] px-4 py-6"
            : "max-h-[50px] "
        }`}
    >
      <div>
        {selectedStatus && (
          <>
            <h5
              className="text-slate-400 font-medium w-full
              text-center flex items-center justify-center"
            >
              Value Selected
              <span
                className={`text-2xl transition-all duration-700 ease-in-out ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <IoMdArrowDropdown />
              </span>
            </h5>
            <div
              className="my-4 border rounded px-4 py-1 border-slate-600 bg-gradient-to-r from-slate-900 to-slate-500 flex justify-between items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center">
                <i className="mx-1 text-[50px]">
                  <selectedStatus.icon />
                </i>
                <p>{selectedStatus.text}</p>
              </div>
              <div
                className="text-[30px] text-slate-100 hover:text-red-950 transition-all"
                onClick={clearSelect}
              >
                <IoTrashBin />
              </div>
            </div>
          </>
        )}
        {!selectedStatus && (
          <p className="text-slate-400 font-medium my-3 w-full  text-center flex items-center justify-center">
            Please Select A Status
            <span
              className={`text-2xl transition-all duration-700 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <IoMdArrowDropdown />
            </span>
          </p>
        )}
      </div>

      {data.map((item: Status) => (
        <div
          className="hover:bg-slate-700 outline-0 flex py-1 px-4 items-center  cursor-pointer transition ease-in-out border my-2 border-slate-800 shadow rounded"
          key={item.id}
          onClick={(e) => SelectHandler(e, item)}
        >
          <i className="mx-1 text-[50px]">
            <item.icon />
          </i>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
