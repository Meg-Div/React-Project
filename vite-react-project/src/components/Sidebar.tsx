import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { ProductContent } from "./CollectionContent";
import { setOpen } from "../state/ArtSlice";
import { CartContent } from "./CartContent";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.art.cart);
  const open = useAppSelector((state) => state.art.open);

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="w-full bg-white fixed top-0 h-full shadow 2-xl 
  md:w[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4
  lg:px-[35px]"
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="text-md font-semibold ">CART (0)</div>

          {/* close button*/}
          <button
            className="curse-pointer w-8 h-8 flex justify-center items-center"
            onClick={() => dispatch(setOpen(!open))}
          >
            <AiIcons.AiFillCloseCircle className="text-2xl" />
          </button>
        </div>
        <div>cart items</div>
        {cart.map((item) => {
          return <CartContent {...item} />;
        })}
      </div>
    </>
  );
};
