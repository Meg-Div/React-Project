import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

import { SidebarData } from "./data/SidebarData";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { setArt } from "../state/ArtSlice";
import { setOpen } from "../state/ArtSlice";
import { Sidebar } from "./Sidebar";

export const Header = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.art.open);

  return (
    <div className="bg-pink-300">
      Header4
      <button onClick={() => dispatch(setOpen(!open))}>
        <BsIcons.BsFillHandbagFill />
      </button>
    </div>
  );
};
