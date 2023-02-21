import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { setOpen, clearCart } from "../state/ArtSlice";
import { CartContent } from "./CartContent";

export function Sidebar(): JSX.Element {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.art.cart);
  const open = useAppSelector((state) => state.art.open);

  if (!open) {
    return <div></div>;
  }
  let finalTotal = 0;
  let amountTotal = 0;

  for (let elem of cart) {
    finalTotal += elem.amount * elem.price;
    amountTotal += elem.amount;
  }

  return (
    <>
      <div
        className="w-full bg-white fixed top-0 h-full shadow 2-xl 
  md:w[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4
  lg:px-[35px]"
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="text-md font-semibold ">CART {amountTotal}</div>

          {/* close button*/}
          <button
            className="curse-pointer w-8 h-8 flex justify-center items-center"
            onClick={() => dispatch(setOpen(!open))}
          >
            <AiIcons.AiFillCloseCircle className="text-2xl" />
          </button>
        </div>
        <div>
          {cart.map((item) => {
            return <CartContent {...item} />;
          })}
        </div>
        <div className="bg-pink-200 flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            {/* total */}
            <div className="uppercase font-semibold ">
              <span>Total: </span>${finalTotal}
            </div>
            {/*clear cart icon */}
            <div
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
              onClick={() => dispatch(clearCart())}
            >
              <FaIcons.FaTrashAlt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
