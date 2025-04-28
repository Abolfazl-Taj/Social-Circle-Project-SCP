import { ElementType } from "react";
import { GiEvilLove, GiDevilMask, GiMuscularTorso } from "react-icons/gi";
import { MdOutlineHandshake } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";

export interface Status {
  id: number;
  icon: ElementType | string;
  text: string;
}

const Status_Data: Status[] = [
  { id: 1, text: "Friend", icon: GiMuscularTorso },
  { id: 2, text: "Co Worker", icon: MdOutlineHandshake },
  { id: 3, text: "Student Mate", icon: PiStudentFill },
  { id: 4, text: "Enemy", icon: GiDevilMask },
  { id: 5, text: "Girl Friend", icon: GiEvilLove },
  { id: 6, text: "Game Mate", icon: IoGameControllerOutline },
];
export default Status_Data;
