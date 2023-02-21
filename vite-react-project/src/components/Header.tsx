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
          <div
            id="noto"
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-summer to-wheat md:pl-2 pl-2"
          >
            Dalle
          </div>
        </Link>

        <div className="flex justify-items-center w-[50px] md:w-[30px] gap-2 pt-2">
          <div className="cursor-pointer flex relative right-12  hover:text-summer">
            <Link to={"/collection"}>
              <BsIcons.BsCollectionFill className="text-3xl" />
            </Link>
          </div>

          {/* Cart */}

          <div
            className="cursor-pointer flex relative right-10  hover:text-summer "
            onClick={() => dispatch(setOpen(!open))}
          >
            <BsIcons.BsFillHandbagFill className="text-3xl" />
            <div className="bg-summer absolute -right-1 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
              {amountTotal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
