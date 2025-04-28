import React, { useActionState, useCallback } from "react";
import Continer from "../../Components/Custom/Continer";
import CreateInput from "../../Components/Custom/CreateInput";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Status_Data from "../../Assets/Data/Status_Data";
import DropDown from "../../Components/Custom/DropDown";
import Personality_Data from "../../Assets/Data/Personality_Data";

const AddPerson = () => {
  const nav = useNavigate();
  const [state, formAction, ispending] = useActionState(
    (
      prevdata: object | null,
      formData: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = formData.target;
      console.log(name, value);
      return {
        ...prevdata,
        [name]: value,
      };
    },
    null
  );

  const NewPersonHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      axios.post("http://localhost:3000/person", state).then(() => {
        toast.success("New Contact Aded Successfully");
        nav("/");
      });
    },
    [state, nav]
  );

  return (
    <Continer>
      <div className="shadow-2xl shadow-slate-950 px-6 py-5 rounded ">
        <h1 className="font-bold border-b py-2 text-2xl">
          Add New Person To SCP
        </h1>
        <form className="flex flex-wrap flex-col items-center justify-center my-3 w-1/2 mx-auto">
          <div className="flex justify-between items-center  my-2 w-full">
            <CreateInput
              onblur={formAction}
              className="w-full"
              labelname="Full Name"
              name="Full_Name"
            />
            <CreateInput
              onblur={formAction}
              className="w-full"
              labelname="Age"
              name="Brith_Day"
            />
          </div>
          <CreateInput
            onblur={formAction}
            className="w-full"
            labelname="Description"
            name="Description"
            inputtype="textarea"
          />

          <DropDown data={Status_Data} formAction={formAction} name="Status" />
          <DropDown data={Personality_Data} lablelText="Please Select Personality Type" formAction={formAction} name="personality" />

          <button
            onClick={NewPersonHandler}
            disabled={ispending}
            type="button"
            className="cursor-pointer bg-slate-800 px-6 py-2 rounded  shadow-2xl shadow-slate-900 hover:text-slate-50 hover:bg-slate-700 transition-all"
          >
            Add New Person
          </button>
        </form>
      </div>
    </Continer>
  );
};

export default AddPerson;
