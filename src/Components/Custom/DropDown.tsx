import { useState } from "react";
import { Status } from "../../Assets/Data/Status_Data";

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
  const [showselected, setShowselected] = useState<any>(
    "Please Select The Status"
  );
  const SelectHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    const mockInput = {
      target: {
        name,
        value,
      },
    };
    formAction(mockInput);
    e.stopPropagation();
    const selecteditem = (e.currentTarget as HTMLElement).outerHTML;
    setShowselected(selecteditem);
  };
  const clearSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowselected("Please Select A Status");
  };
  return (
    <div
      onClick={() => setIsopen(!isOpen)}
      className={`my-4 w-full outline-noone border  border-slate-700  rounded shadow-2xl overflow-hidden transition-all px-4 py-6  ${
        isOpen ? "max-h-max" : "max-h-16 "
      }}`}
    >
      <div>
        <h5>Value Selected</h5>

        {showselected && (
          <div
            onClick={clearSelect}
            className="my-4 border rounded px-4 py-2 border-slate-600 bg-gradient-to-r from-slate-900 to-slate-500 "
            dangerouslySetInnerHTML={{ __html: showselected }}
          />
        )}
      </div>
      {data.map((item: Status) => {
        return (
          <div
            className={` hover:!bg-slate-700 !outline-0 flex py-1 px-4 items-center rounded ${
              isOpen ? "flex" : "hidden"
            }`}
            key={item.id}
            name={item.text}
            onClick={(e) => SelectHandler(e, item.text)}
          >
            <i className="mx-1 text-[40px]">
              <item.icon />
            </i>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
