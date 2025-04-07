import { ElementType } from "react";
import { TbBrandGoogleHome } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";

interface SideBarData {
  id: string | number;
  icon: ElementType;
  text: string;
  path: string;
}
const SideBar_Data: SideBarData[] = [
  { id: 1, icon: TbBrandGoogleHome, text: "Home", path: "/" },
  { id: 2, icon: FiUserPlus, text: "Add New Person", path: "/add-person" },
];
export default SideBar_Data;
