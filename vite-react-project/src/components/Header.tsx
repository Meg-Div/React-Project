import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { setOpen } from "../state/ArtSlice";

export function Header(): JSX.Element {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.art.open);
  const cart = useAppSelector((state) => state.art.cart);

  let amountTotal = 0;
  for (let elem of cart) {
    amountTotal += elem.amount;
  }

  return (
    <div className="bg-white py-6 shadow-md fixed w-full z-10 transition-all p-1">
      {/* Logo */}
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src="/Logo.png" alt="" />
          </div>
        </Link>
        {/* Cart */}
        <div
          className="cursor-pointer flex relative right-2 "
          onClick={() => dispatch(setOpen(!open))}
        >
          <BsIcons.BsFillHandbagFill className="text-3xl" />
          <div className="bg-red-500 absolute -right-1 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {amountTotal}
          </div>
        </div>
      </div>
    </div>
  );
}
