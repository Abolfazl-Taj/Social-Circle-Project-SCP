import { ElementType } from "react";
import { TbBrandGoogleHome } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa6";

interface SideBarData {
  id: string | number;
  icon: ElementType;
  text: string;
  path: string;
}
const SideBar_Data: SideBarData[] = [
  { id: 1, icon: TbBrandGoogleHome, text: "Home", path: "/" },
  { id: 2, icon: FiUserPlus, text: "Add New Person", path: "/add-person" },
  { id: 3, icon: FaRegNewspaper, text: "News", path: "/news" },
];
export default SideBar_Data;
