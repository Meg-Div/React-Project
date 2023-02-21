import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { setOpen } from "../state/ArtSlice";

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
